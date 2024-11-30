'use client';

import { fetchRooms } from './actions';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function Rooms() {
  const router = useRouter();

  const { data: rooms = [] } = useQuery({
    queryKey: ['rooms'],
    queryFn: fetchRooms,
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold my-6">Available Rooms</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <ul>
          {rooms.map((room) => (
            <li
              key={room._id}
              className="p-3 border rounded-lg shadow-sm mb-2 flex justify-between items-center"
            >
              <span className="text-lg font-medium">{room.title}</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => router.push(`/rooms/${room._id}`)}
              >
                Join
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
