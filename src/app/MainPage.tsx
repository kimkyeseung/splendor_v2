'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from './actions';
import { User } from '@/types';

export default function MainPage() {
  const router = useRouter();

  const userId =
    typeof window !== undefined ? localStorage.getItem('user') : '';

  const { isError } = useQuery<User>({
    queryKey: ['me'],
    queryFn: async () => await fetchUser(userId!),
    enabled: Boolean(userId),
  });

  useEffect(() => {
    if (!userId || isError) {
      router.push('/welcome');
    }
  }, [userId, isError]);

  const handleCreateUser = () => {
    router.push('/welcome');
  };

  const handleCreateRoom = () => {
    router.push('/create');
  };

  const handleJoinRoom = () => {
    router.push('/rooms');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold mb-8 text-blue-600">스플렌더</h1>
      <div className="space-y-4">
        <button
          onClick={handleCreateUser}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          사용자 생성하기
        </button>
        <button
          onClick={handleCreateRoom}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
        >
          방 만들기
        </button>
        <button
          onClick={handleJoinRoom}
          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600"
        >
          방 참여하기
        </button>
      </div>
    </div>
  );
}
