'use server';

import { get } from '@/lib/api';
import { Room } from '@/types';

export async function fetchRooms() {
  const { data = [] } = await get<Room[]>('/room');
  return data;
}
