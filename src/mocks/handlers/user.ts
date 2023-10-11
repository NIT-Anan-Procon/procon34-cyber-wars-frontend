import { rest } from 'msw';

import { AuthUser } from '@/features/auth';
import { 
  IS_SIGNEDIN_URL,
  SIGNIN_USER_URL, 
  SIGNOUT_USER_URL, 
  SIGNUP_USER_URL, 
  UPDATE_USER_NAME_URL,
  UPDATE_USER_PASSWORD_URL
} from '@/constants/apiUrls';

export type AuthUserBody= AuthUser & {
  user_id: number;
}

export const userHandlers= [
  rest.post<AuthUserBody>( SIGNUP_USER_URL, (_, res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({ success :true }),
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

  rest.post<AuthUserBody>( SIGNIN_USER_URL, (_, res, ctx) => { 
    try {
      return res(
        ctx.status(200),
        ctx.json({ success :true }),
      );

    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({success :false})
      );
    } 
  }),

  rest.patch( UPDATE_USER_NAME_URL, (_, res, ctx) => {
    try {

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

  rest.patch( UPDATE_USER_PASSWORD_URL, (_, res, ctx) => {
    try {

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

  rest.get( IS_SIGNEDIN_URL, (_, res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            loggedIn: true,
            name    : 'kusaka'
          }
        )
      );
    }
    catch(error) {
      return res(
        ctx.status(400),
        ctx.json(
          {
            loggedIn: false,
            
          }
        )
      );
    }
  }),

  rest.delete( SIGNOUT_USER_URL, ( _, res, ctx ) => {
    try {

      return res(
        ctx.status(200),
      );
    }
    catch(error) {
      return res(
        ctx.status(400),
      );
    }
  })
];