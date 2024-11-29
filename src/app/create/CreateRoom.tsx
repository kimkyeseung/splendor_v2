'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRoom } from './actions';
import { CreateRoomParams, Room } from '@/types';
import { useRouter } from 'next/navigation';

export default function CreateRoom() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateRoomParams>();
  const [successMessage, setSuccessMessage] = useState('');

  // 방 만들기
  const mutation = useMutation({
    mutationFn: createRoom,
    mutationKey: ['rooms'],
    onSuccess: (data: Room) => {
      queryClient.invalidateQueries(); // 방 목록 갱신
      // router.push(`/${data._id}`);
    },
  });

  const onSubmit = (data: CreateRoomParams) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Create a New Room</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg w-full max-w-md p-6"
      >
        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required.' })}
            placeholder="Enter room title"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.title
                ? 'border-red-500 focus:ring-red-500'
                : 'focus:ring-blue-500'
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password (Optional)
          </label>
          <input
            type="password"
            id="password"
            {...register('password')}
            placeholder="Enter a password"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
        >
          {isSubmitting ? 'Creating...' : 'Create Room'}
        </button>
      </form>
    </div>
  );
}
