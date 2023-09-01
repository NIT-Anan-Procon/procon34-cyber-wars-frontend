import { rest } from 'msw';
import jwt from 'jsonwebtoken';

import { AuthUser } from '@/features/auth';
import { 
  IS_LOGGEDIN_URL,
  SIGNIN_USER_URL, 
  SIGNOUT_USER_URL, 
  SIGNUP_USER_URL, 
  UPDATE_USER_NAME_URL,
  UPDATE_USER_PASSWORD_URL
} from '@/config/apiEndpoints';

import { db } from '../db';
import { authenticate } from '../utils';

export type AuthUserBody= AuthUser & {
  user_id: number;
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
        user_id : Math.floor(Math.random() * 1000000),
        password: userObject.password,
      });

      const result= authenticate(userObject);
      return res(ctx.json(result));

    } catch(error: any) {
      return res(
        ctx.status(400)
      );
    }
  }),

  rest.post<AuthUserBody>( SIGNIN_USER_URL, (req, res, ctx) => { 
    try {
      const credential= req.body;

      const result= authenticate(credential);

      return res(ctx.json(result));

    } catch (error: any) {
        console.log(error);
      return res(
        ctx.status(400),
        ctx.json({success :false})
      );
    } 
  }),

  rest.patch( UPDATE_USER_NAME_URL, (req, res, ctx) => {
    try {
      const update_userName= req.body;

      return res(
        ctx.status(200),
        ctx.json(({ success: true}))
      );
    }
    catch(error) {

    }
  }),

  rest.patch( UPDATE_USER_PASSWORD_URL, (req, res, ctx) => {
    try {
      const update_password= req.body;

      return res(
        ctx.status(200),
        ctx.json(({ success: true}))
      );
    }
    catch(error) {

    }
  }),

  rest.get( IS_LOGGEDIN_URL, (res, ctx) => {
    try {

    }
    catch(error) {

    }
  }),

  rest.delete( SIGNOUT_USER_URL, () => {

  }),
];