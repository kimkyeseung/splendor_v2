'use server';

import { get } from '@/lib/api';
import { User } from '@/types';

export async function fetchUser(_id: string) {
  return await get<User>(`/users/${_id}`);
}
