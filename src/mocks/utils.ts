import { db } from './db';
import { AuthUserBody } from './handlers/user';


export function authenticate({ name, password }: AuthUserBody ) {
  const user = db.user.findFirst({
    where: {
      name: {
        equals: name,
      },
    },
  });

  if (user?.password === password) {
    return { success: true };
  }

  const error = new Error('ユーザ名もしくはパスワードが正しくありません。');
  throw error;
}



export function randomNum(digit: number) {
  const random = Math.random();
  const number = Math.floor(random * (10**digit));
  const string = number.toString();
  const padded = string.padStart(digit, '0');
  
  return Number(padded);
}