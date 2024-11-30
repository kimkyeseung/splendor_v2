'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { io, Socket } from 'socket.io-client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createGame, fetchRoom, fetchUser } from './actions';
import { Room, User } from '@/types';

const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL;

interface Player {
  _id: string;
  nickname: string;
  isReady: boolean;
  isHost: boolean;
}

export default function RoomPage({ _id }: { _id: string }) {
  const router = useRouter();
  const [socket, setSocket] = useState<Socket>();

  const userId = localStorage.getItem('user');

  const { data: room, isError } = useQuery<Room>({
    queryKey: ['rooms', _id!],
    queryFn: async () => await fetchRoom(_id),
  });

  const { data: me, isLoading } = useQuery<User>({
    queryKey: ['me'],
    queryFn: async () => await fetchUser(userId!),
    enabled: Boolean(userId),
  });

  const mutation = useMutation({
    mutationFn: createGame,
    mutationKey: ['game'],
    onSuccess: (data: any) => {
      if (socket) {
        socket.emit('startGame', { gameId: data._id, roomId: _id });
      }
    },
  });

  useEffect(() => {
    if (!userId || isError) {
      router.push('/welcome');
    }
  }, [userId, isError]);

  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (me) {
      const socketConnection = io(socketUrl);

      socketConnection.emit('joinRoom', { roomId: _id, user: me });

      socketConnection.on('playerListUpdated', (updatedPlayers: Player[]) => {
        console.log('event emit: playerListUpdated', updatedPlayers);
        setPlayers(updatedPlayers);
      });

      socketConnection.on('gameStarted', (gameId: string) => {
        console.log('work');
        router.push(`/game/${gameId}`);
      });

      setSocket(socketConnection);

      return () => {
        socketConnection.disconnect();
      };
    }
  }, [me]);

  const isStartable = useMemo(() => {
    return players.every((p) => p._id !== me?._id || p.isReady);
  }, [players]);

  const toggleReady = () => {
    if (socket) {
      socket.emit('toggleReady', { roomId: _id });
    }
  };

  const startGame = () => {
    mutation.mutate({ roomId: _id, players });
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">{room?.title}</h1>

      <div className="w-full max-w-md space-y-4">
        <ul className="space-y-2">
          {players.map((player) => (
            <li
              key={player._id}
              className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
                player.isReady ? 'bg-green-200' : 'bg-gray-200'
              }`}
            >
              <span className="font-medium text-gray-800">
                {player.nickname} {player._id === me?._id && <span>(나)</span>}
              </span>
              <span className="text-sm text-gray-600">
                {player.isReady ? '준비 완료' : '대기 중'}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          {players[0]?._id === me?._id ? (
            <button
              onClick={startGame}
              className="w-full py-3 bg-blue-500 disabled:bg-blue-200 text-white font-semibold rounded-lg hover:bg-blue-600"
              disabled={!isStartable}
            >
              게임 시작
            </button>
          ) : (
            <button
              onClick={toggleReady}
              className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
            >
              {players.find((player) => player._id === me?._id)?.isReady
                ? '준비 취소'
                : '준비'}
            </button>
          )}

          <button
            onClick={router.back}
            className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600"
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
}
