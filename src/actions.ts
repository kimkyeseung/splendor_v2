'use server';

import { get, post } from '@/lib/api';
import { CreateRoomParams, Room } from '@/types';

export async function fetchRooms() {
  const { data = [] } = await get<Room[]>('/game'); // API 호출
  return data;
}

export async function createRoom(payload: CreateRoomParams) {
  const { data } = await post('/game', payload);
  return data;
}
