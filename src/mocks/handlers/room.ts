import { rest } from 'msw';

import { ROOM_URL } from '@/constants/apiUrls';
import { db } from '../db';
import { randomNum } from '../utils';
import { IS_HOST_KEY, IS_STARTED_KEY, OPPONENT_NAME_KEY } from '@/constants/responseKeys';

type RoomHandlersType= {
  difficult: boolean;
  success  : boolean;
  roomId   : number;
  userId   : number; 
  inviteId : number;
}

export const roomHandlers= [
  rest.post<RoomHandlersType>( ROOM_URL, (req, res, ctx) => {
    try {
      const isDifficult= req.body.difficult;

      const roomId  = randomNum(3);
      const inviteId= randomNum(4);

      if(!isDifficult) {
        db.room.create({
          roomId  : roomId,
          inviteId: inviteId
        });

        // db.allocations.create({
        //   roomId: db.room.roomId,
        //   userId: db.user.userId,
        //   host  : true
        // });
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
  
  rest.put<RoomHandlersType>( ROOM_URL, (req, res, ctx) => {
    try {
      // const inputRoomId= req.body;
      
      // const existingRoom= db.room.findFirst({
      //   where: {
      //     inviteId: {
      //       equals: inputRoomId.inviteId,
      //     }
      //   }
      // });

      // if(existingRoom) {
      //   db.allocations.create({
      //     roomId: existingRoom.roomId,
      //     userId: db.user.userId,
      //     host  : false
      //   })
      // } else {
      //   throw Error('ルームが存在していません。');
      // }

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

  rest.get(ROOM_URL, (req ,res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            [ IS_HOST_KEY ]: true,
            [ OPPONENT_NAME_KEY ]: 'kinoshita',
            [ IS_STARTED_KEY ]: true
          }
        )
      );
    }
    catch(error) {
      return res(ctx.status(400));
    }
  }),

  rest.delete(ROOM_URL, ( req, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.delay(1000)
      );
    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),
];