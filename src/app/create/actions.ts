'use server';

import { post } from '@/lib/api';
import { CreateRoomParams, Room } from '@/types';

export async function createRoom(payload: CreateRoomParams) {
  return await post<Room>('/room', payload);
}
