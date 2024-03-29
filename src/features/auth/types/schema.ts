import { z } from 'zod';

export const FormSchema= z.object({
  name: z
		.string()
		.nonempty('ユーザ名は必須です。')
		.max(20, '20文字以内で入力してください。'),
	password: z
		.string()
		.nonempty('パスワードは必須です。')
		.min(4, '4文字以上で入力してください。')
		.max(100, '100文字以内で入力してください。'),
})