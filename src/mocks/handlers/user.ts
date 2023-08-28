import { rest } from 'msw';
import jwt from 'jsonwebtoken';

import { AuthUser } from '@/features/auth';
import { SIGNUP_USER_URL } from '@/features/auth/api/config/userAuth_endpoints';

import { db } from '../db';
import { authenticate} from '../utils';
import { SIGNIN_USER_URL } from '../../features/auth/api/config/userAuth_endpoints';

export type AuthUserBody= AuthUser & {
  user_id: number
}

export const userHandlers= [
  rest.post<AuthUserBody>( SIGNUP_USER_URL, async(req, res, ctx) => {
    try {
      const  userObject= req.body;

      const existingUser= db.user.findFirst({
        where: {
          name: {
            equals: userObject.name,
          }
        }
      });

      if(existingUser) {
        throw new Error('すでにそのユーザは存在しています。');
      }

      db.user.create({
        ...userObject,
        user_id: Math.floor(Math.random() * 1000000),
        password: userObject.password,
      });

      const result= authenticate(userObject);
      console.log(result);
      return res(ctx.json(result));

    } catch(error: any) {
      return res(
        ctx.status(400)
      );
    }
  }),

  rest.post<AuthUserBody>( SIGNIN_USER_URL, (req, res, ctx) => { 
    try {
      const credentials= req.body;

      const result= authenticate(credentials);
      console.log(result);
      return res(ctx.json(result));

    } catch (error: any) {
      return res(
        ctx.status(400)
      );
    } 
  }),
];