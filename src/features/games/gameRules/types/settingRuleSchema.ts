import { z } from 'zod';

export const settingRuleSchema= z.object({
  settingTime: 
  z
  .number({
    required_error: "必須項目です",
    invalid_type_error: "数値を入力してください"
  })
  .min( 0.000001, '0より大きい値に設定してください' )
  .max( 20, '20分以下に設定してください' )
});