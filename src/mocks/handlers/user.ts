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
  rest.post<AuthUserBody>( SIGNUP_USER_URL, (req, res, ctx) => {
    try {
      const  userObject= req.body;
      console.log(userObject)
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
        userId : Math.floor(Math.random() * 1000000),
        password: userObject.password, //あとでハッシュする
      });

      const result= authenticate(userObject);
      return res(
        ctx.status(200),
        ctx.json(result),
        ctx.delay(1000)
      );

    } catch(error: any) {
      return res(
        ctx.status(400),
        ctx.json({ success :false }),
        ctx.delay(1000)
      );
    }
  }),

  rest.post<AuthUserBody>( SIGNIN_USER_URL, (req, res, ctx) => { 
    try {
      const credential= req.body;

      const result= authenticate(credential);

      return res(
        ctx.status(200),
        ctx.json(result)
      );

    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({success :false})
      );
    } 
  }),

  rest.patch( UPDATE_USER_NAME_URL, (req, res, ctx) => {
    try {
      const update_userName= req.body;

      const user = db.user.findFirst({ 
        where: { 
          loggedIn: {
            equals: true 
          } 
        }
      });

      if (user) {
        db.user.update({
          where: { name: user.name },
          data: { update_userName }
        })
      }
      
      return res(
        ctx.status(200),
        ctx.json(({ success: true}))
      );
    }
    catch(error) {
      return res(
        ctx.status(400),
        ctx.json({success :false})
      );
    }
  }),

  rest.patch( UPDATE_USER_PASSWORD_URL, (req, res, ctx) => {
    try {
      const update_password= req.body;

      const user = db.user.findFirst({ 
        where: { 
          loggedIn: {
            equals: true 
          } 
        }
      });
    
      if (user) {
        db.user.update({
          where: { password: user.password },
          data: { update_password }
        })
      }

      return res(
        ctx.status(200),
        ctx.json(({ success: true}))
      );
    }
    catch(error) {
      return res(
        ctx.status(400),
        ctx.json({success :false})
      );
    }
  }),

  rest.get( IS_LOGGEDIN_URL, (req, res, ctx) => {
    try {
      const user= db.user.findFirst(
        { 
          where: { 
            loggedIn: {
              equals: true
            } 
          }
        }
      );
      if(!user) {
        throw Error('ユーザは存在していません。');
      }

      return res(
        ctx.status(200),
        ctx.json(
          {
            loggedIn: true,
            name    : user.name
          }
        )
      );
    }
    catch(error) {
      return res(
        ctx.status(400),
      );
    }
  }),

  rest.delete( SIGNOUT_USER_URL, ( req, res, ctx ) => {
      const user = db.user.findFirst({
        where: { 
          loggedIn: { 
            equals: true 
          } 
        }
      });

    if (user) {
      db.user.update({
        where: { name: user.name },
        data:  { loggedIn: false }
      })
    }

    return res();
  })
];