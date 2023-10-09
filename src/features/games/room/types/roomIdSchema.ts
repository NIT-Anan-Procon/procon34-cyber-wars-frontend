import { z } from 'zod';

export const RoomIdSchema= z.object({
  inviteId: 
    z
    .string()
    .nonempty('入力は必須です。')
    .regex(/^\d{4}$/, '4桁の数値で入力してください。')
});