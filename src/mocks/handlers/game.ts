import { rest } from 'msw';
import { db } from '../db';
import { mockChallenge } from '../challengeData/mock_challenge';
import { 
  FETCH_GAME_START_TIME_URL, 
  START_GAME_URL, 
  GAME_OPPONENT_NAME_URL, 
  GAME_SCORES_URL, 
  ATTACK_CHALLENGE_URL,
  ATTACK_HINT_URL,
  ATTACK_SEND_KEY_URL,
  DEFENCE_CODE_URL,
  BATTLE_REVISION_URL,
  BATTLE_SEND_KEY_URL
} from '@/config/apiEndpoints';

import { 
  CHOICES_KEY, 
  CODE_KEY, 
  CODE_PATH_KEY, 
  CORRECT_KEY, 
  GAME_SCORE_KEY, 
  HINT_KEY, 
  HINT_SCORE_KEY, 
  IS_VALID_KEY, 
  OPPONENT_NAME_KEY, 
  SCORES_KEY, 
  START_TIME_KEY, 
  VULNERABILITIES_KEY 
} from '@/config/responseKeys';

export const gameHandlers= [
  rest.patch( START_GAME_URL, ( req, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.delay(1000),
      );

    } catch(error) {
      return res( 
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),

  rest.get( FETCH_GAME_START_TIME_URL, ( req, res, ctx ) => {
    try {
      const date = new Date();
      const utcTime= date.toUTCString();

      return res(
        ctx.status(200),
        ctx.json({ [ START_TIME_KEY ]: utcTime }),
        ctx.delay(1000),
      );

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),
  rest.get( GAME_OPPONENT_NAME_URL, ( req, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            [ OPPONENT_NAME_KEY ]: "木下 聡大"
          }
        ),
        ctx.delay(1000)
      );

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),
  rest.get( GAME_SCORES_URL, ( req, res, ctx ) => {
    try {
      const scores= [ 100, 200 ];

      return res(
        ctx.status(200),
        ctx.json({ [ SCORES_KEY ]: scores }),
        ctx.delay(1000)
      )

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      )
    }
  }),
];

export const attackPhaseHandler= [
  rest.get( ATTACK_CHALLENGE_URL, ( req, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({
          [ CODE_PATH_KEY ]: 1,
          [ VULNERABILITIES_KEY ]: [
            {
              [ CHOICES_KEY ]   : [ "'", "or", "1", "=", "1" ],
              [ HINT_KEY ]      : "4行目の",
              [ HINT_SCORE_KEY ]: -10
            }
          ]
        }),
        ctx.delay(1000)
      )      
    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),
  rest.post( ATTACK_HINT_URL, ( req, res, ctx ) => {
    try {
      const vulnerabilityId= req.body;

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
  rest.post( ATTACK_SEND_KEY_URL, ( req, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            [ IS_VALID_KEY ]  : true,
            [ CORRECT_KEY ]   : true,
            [ GAME_SCORE_KEY ]: 20,
          }
        ),
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

export const defencePhaseHandler= [
  rest.get( DEFENCE_CODE_URL, ( req, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            [ CODE_PATH_KEY ]: 1,
            [ CODE_KEY ]     : { mockChallenge }
          }
        ),
        ctx.delay(1000)
      );
    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000),
      );
    }
  }),
  rest.put( DEFENCE_CODE_URL, ( req, res, ctx ) => {
    try {
      const code= req.body;

      return res(
        ctx.status(200),
        ctx.json({ [ IS_VALID_KEY ]: true }),
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

export const battlePhaseHandler= [
  rest.get( BATTLE_REVISION_URL, ( req, res, ctx ) => {
    try {
      return res(
        ctx.status(200),
        ctx.json(
          {
            [ CODE_PATH_KEY ]: '1/1',
            [ CODE_KEY ]     : { mockChallenge }
          }
        ),
        ctx.delay(1000)
      );

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),

  rest.post( BATTLE_SEND_KEY_URL, ( req, res, ctx ) => {
    try {
      const flag= req.body;

      return res(
        ctx.status(200),
        ctx.json(
          {
            [ IS_VALID_KEY ]  : true,
            [ CORRECT_KEY ]   : true,
            [ GAME_SCORE_KEY ]: 20
          }
        ),
        ctx.delay(1000),
      );

    } catch(error) {
      return res(
        ctx.status(400),
        ctx.delay(1000)
      );
    }
  }),
];