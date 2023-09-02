import { rest } from 'msw';

import { 
  CREATE_ROOM_URL, 
  GET_ROOM_INFO_URL, 
  JOIN_ROOM_URL, 
  LEAVE_ROOM_URL 
} from '@/config/apiEndpoints';
import { db } from '../db';

export const roomHandlers= [
  rest.post( CREATE_ROOM_URL, (req, res, ctx) => {
    try {
      const create_room= req.body;
      
      db.room.create({
        invite_id: 1234
      });
      

      return res(
        ctx.status(200),
        ctx.json(({ inviteId: 1234}))
      );
    }
    catch(error) {
      return res(ctx.status(400));
    }
  }),
  
  rest.put(JOIN_ROOM_URL, (req, res, ctx) => {
    try {

    }
    catch(error) {

    }
  }),

  rest.get(GET_ROOM_INFO_URL, (res, ctx) => {
    try {
      const members= {
        host: true,
        opponent: "kinoshita",
        started: true
      }

      return res(
        ctx.status(200),
        ctx.json({ members })
      );
    }
    catch(error) {
      return res(ctx.status(400));
    }
  }),

  rest.delete(LEAVE_ROOM_URL, () => {

  }),
];