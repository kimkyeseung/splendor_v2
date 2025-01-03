'use client';

import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRoom } from './actions';
import { CreateRoomParams, Room } from '@/types';
import { useRouter } from 'next/navigation';

export default function CreateRoomPage() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateRoomParams>();

  const mutation = useMutation({
    mutationFn: createRoom,
    mutationKey: ['rooms'],
    onSuccess: (data: Room) => {
      queryClient.invalidateQueries();
      router.push(`/rooms/${data._id}`);
    },
  });

  const handleBack = () => {
    router.back();
  };

  const onSubmit = (data: CreateRoomParams) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">방 만들기</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            방 제목
          </label>
          <input
            type="text"
            {...register('title', { required: '방 제목은 필수입니다.' })}
            placeholder="방 제목을 입력하세요"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            패스워드 (선택)
          </label>
          <input
            type="password"
            {...register('password')}
            placeholder="패스워드를 입력하세요 (선택사항)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between space-x-4 mt-6">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400"
          >
            뒤로가기
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
          >
            확인
          </button>
        </div>
      </form>
    </div>
  );
}
