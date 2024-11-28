'use client';

import { createRoom, fetchRooms } from '@/actions';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function HomePage() {
  const queryClient = useQueryClient();
  const [roomName, setRoomName] = useState('');

  // 방 목록 가져오기
  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery({ queryKey: ['rooms'], queryFn: fetchRooms });

  // 방 만들기
  const mutation = useMutation({
    mutationFn: createRoom,
    mutationKey: ['rooms'],
    onSuccess: () => {
      queryClient.invalidateQueries(); // 방 목록 갱신
    },
  });

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      mutation.mutate({ title: 'title' });
      setRoomName(''); // 입력 초기화
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 mt-6">Game Lobby</h1>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Available Rooms</h2>

        {/* 방 목록 로딩 상태 */}
        {isLoading && <p>Loading rooms...</p>}
        {error && <p className="text-red-500">Failed to load rooms.</p>}

        {/* 방 목록 */}
        <ul>
          {rooms?.map((room: any) => (
            <li
              key={room.roomId}
              className="p-3 border rounded-lg shadow-sm mb-2 flex justify-between items-center"
            >
              <span className="text-lg font-medium">{room.roomId}</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => (window.location.href = `/game/${room.roomId}`)}
              >
                Join
              </button>
            </li>
          ))}
        </ul>

        {/* 방 만들기 */}
        <div className="mt-6">
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Enter room name"
            className="border p-2 rounded-lg w-full mb-4"
          />
          <button
            onClick={handleCreateRoom}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
}
