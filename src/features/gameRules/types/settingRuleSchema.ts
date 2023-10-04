import { z } from 'zod';

export const settingRuleSchema= z.object({
  settingTime: 
  z
  .number({
    required_error: "必須項目です",
    invalid_type_error: "数値を入力してください"
  })
  .min( 3, '3分以上に設定してください' )
  .max( 20, '20分以下に設定してください' )
});