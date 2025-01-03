'use server';

import { post } from '@/app/lib/api';
import { CreateUserResponse } from '@/types';

export async function createUser(nickname: string) {
  return await post<CreateUserResponse>('/users', { nickname });
}
