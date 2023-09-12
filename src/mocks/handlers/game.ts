import { rest } from 'msw';

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


export const gameHandlers= [
  rest.patch( START_GAME_URL, ( req, res, ctx ) => {
  
  }),
  rest.get( FETCH_GAME_START_TIME_URL, ( req, res, ctx ) => {

  }),
  rest.get( GAME_OPPONENT_NAME_URL, ( req, res, ctx ) => {

  }),
  rest.get( GAME_SCORES_URL, ( req, res, ctx ) => {

  }),
];

export const attackPhaseHandler= [
  rest.get( ATTACK_CHALLENGE_URL, ( req, res, ctx ) => {

  }),
  rest.post( ATTACK_HINT_URL, ( req, res, ctx ) => {

  }),
  rest.post( ATTACK_SEND_KEY_URL, ( req, res, ctx ) => {

  }),
];

export const defencePhaseHandler= [
  rest.get( DEFENCE_CODE_URL, ( req, res, ctx ) => {

  }),
  rest.put( DEFENCE_CODE_URL, ( req, res, ctx ) => {

  }),
];

export const battlePhaseHandler= [
  rest.get( BATTLE_REVISION_URL, ( req, res, ctx ) => {

  }),
  rest.post( BATTLE_SEND_KEY_URL, ( req, res, ctx ) => {

  }),
];