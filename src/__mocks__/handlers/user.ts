import { rest } from 'msw';

import { AuthUser } from '@/features/auth';
import { SIGNUP_USER_URL } from '@/features/auth/api/config/userAuth_endpoints';

import { db } from '../db';
import { ISSUCCESS_KEY } from '@/features/auth/api/config/userAuth_keys';

export const userHandlers= [
  rest.post<AuthUser>(`${SIGNUP_USER_URL}`, (req, res, ctx) => {
    try {
      const  userObject= req.body;


      db.user.create({
        ...userObject,
        id: (),
        password: hash(userObject.password),
      });

      const result= { ISSUCCESS_KEY: true};
      return res(ctx.json(result))
    }
  });
];