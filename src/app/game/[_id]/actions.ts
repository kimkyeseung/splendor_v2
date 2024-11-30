'use server';

import { get } from '@/lib/api';

export async function fetchGame(_id: string) {
  return await get(`/game/${_id}`);
}
