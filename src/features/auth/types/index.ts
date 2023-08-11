import { z } from 'zod';

export type AuthUser= {
  userName: string;
  password: string;
}

export const FormSchema= {
  userName: z.string().min(1).max(20),
  password: z.string().min(4).max(100),
}