import jwt    from 'jsonwebtoken';

import { db } from './db';
import { AuthUser } from '@/features/auth';
import { JWT_SECRET } from '@/config/jwt_secret';
import { ISSUCCESS_KEY } from '../features/auth/api/config/userAuth_keys';
import { AuthUserBody } from './handlers/user';


// export const hash= async( str: string ): Promise<string> => {
//   return await bcrypt.hash(str, 10);
// };

export function authenticate({ name, password }: AuthUserBody ) {

  const user = db.user.findFirst({
    where: {
      name: {
        equals: name,
      },
    },
  });

  if (user?.password === password) {
    return { ISSUCCESS_KEY: true };
  }

  const error = new Error('ユーザ名もしくはパスワードが正しくありません。');
  throw error;
}