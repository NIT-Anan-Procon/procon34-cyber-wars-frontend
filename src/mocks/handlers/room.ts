import { rest } from 'msw';

import { 
  CREATE_ROOM_URL, 
  GET_ROOM_INFO_URL, 
  JOIN_ROOM_URL, 
  LEAVE_ROOM_URL 
} from '@/config/apiEndpoints';
import { db } from '../db';
import { randomNum } from '../utils';

export const roomHandlers= [
  rest.post( CREATE_ROOM_URL, (req, res, ctx) => {
    try {
      const isDifficult= req.body.difficult;

      const roomId  = randomNum(3);
      const inviteId= randomNum(4);

      if(!isDifficult) {
        db.room.create({
          roomId  : roomId,
          inviteId: inviteId
        });

        db.allocations.create({
          roomId: db.room.roomId,
          userId: db.user.userId,
          host  : true
        });
      } else {
        throw Error('ルーム作成に失敗しました。');
      }

      return res(
        ctx.json({ inviteId: inviteId}),
        ctx.status(200),
        ctx.delay(1000),
      );
    }
    catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000),
      );
    }
  }),
  
  rest.put( JOIN_ROOM_URL, (req, res, ctx) => {
    try {
      const inputRoomId= req.body;
      
      const existingRoom= db.room.findFirst({
        where: {
          inviteId: {
            equals: inputRoomId.inviteId,
          }
        }
      });

      if(existingRoom) {
        db.allocations.create({
          roomId: existingRoom.roomId,
          userId: db.user.userId,
          host  : false
        })
      } else {
        throw Error('ルームが存在していません。');
      }

      return res(
        ctx.status(200),
        ctx.json({ succuess: true }),
        ctx.delay(1000)
      );
    }
    catch(error) {
      return res(ctx.status(400));
    }
  }),

  rest.get(GET_ROOM_INFO_URL, (res, ctx) => {
    try {
      const getAllData= db.allocations.roomId;

      if(isHost) {

      } else {

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