'use client';

import { fetchRooms } from '@/actions';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function Lobby() {
  // 방 목록 가져오기
  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery({ queryKey: ['rooms'], queryFn: fetchRooms });
  const [roomId, setRoomId] = useState('');

  const handleJoin = () => {
    if (roomId) {
      window.location.href = `/game/${roomId}`;
    }
  };

  const handleCreateRoom = () => {
    const newRoomId = `room-${Math.floor(Math.random() * 1000)}`;
    window.location.href = `/game/${newRoomId}`;
  };

  return (
    <div>
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
              key={room._id}
              className="p-3 border rounded-lg shadow-sm mb-2 flex justify-between items-center"
            >
              <span className="text-lg font-medium">{room.title}</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => (window.location.href = `/game/${room._id}`)}
              >
                Join
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Game Lobby</h1>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <label htmlFor="roomId" className="block text-gray-700 mb-2">
            Enter Room ID
          </label>
          <input
            type="text"
            id="roomId"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Room ID"
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleJoin}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Join Room
          </button>
          <div className="text-center text-gray-500 my-4">or</div>
          <button
            onClick={handleCreateRoom}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Create New Room
          </button>
        </div>
      </div>
    </div>
  );
}
