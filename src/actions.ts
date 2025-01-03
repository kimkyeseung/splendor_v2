'use server';

import { get } from '@/app/lib/api';
import { Room } from '@/types';

export async function fetchRooms() {
  const { data = [] } = await get<{ data: Room[] }>('/room');
  return data;
}
