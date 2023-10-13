import { rest } from 'msw';

import { ROOM_URL } from '@/constants/apiUrls';
import { IS_HOST_KEY, IS_STARTED_KEY, OPPONENT_NAME_KEY } from '@/constants/responseKeys';
import attackPhase from '@/assets/images/attack_phase.svg';
import battlePhase from '@/assets/images/battle_phas.svg';
import { PHASE } from '@/features/games/phases';

type RoomHandlersType= {
  difficult: boolean;
  success  : boolean;
  roomId   : number;
  userId   : number; 
  inviteId : number;
}

export const roomHandlers= [
  rest.post<RoomHandlersType>( ROOM_URL, (_, res, ctx) => {
    try {
      return res(
        ctx.json({ inviteId:1234}),
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
  
  rest.put<RoomHandlersType>( ROOM_URL, (_, res, ctx) => {
    try {
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

  rest.get(ROOM_URL, (_ ,res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            [ IS_HOST_KEY ]: true,
            [ OPPONENT_NAME_KEY ]: 'kinoshita',
            timiLimit: {
              [PHASE.ATTACK_PHASE]: 300,
              [PHASE.DEFENCE_PHASE]: 300,
              [PHASE.BATTLE_PHASE]: 300
            },
            [ IS_STARTED_KEY ]: false
          }
        )
      );
    }
    catch(error) {
      return res(ctx.status(400));
    }
  }),

  rest.patch( ROOM_URL, ( req, res, ctx ) => {
    try {
      return res(
        ctx.status(200)
      );
    }
    catch(error) {
      return res(ctx.status(400));
    }
  }),

  rest.delete(ROOM_URL, ( _, res, ctx ) => {
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