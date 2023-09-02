//ユーザ認証関連のエンドポイント
export const SIGNUP_USER_URL  = '/users';
export const USER_NAME_URL    = '/users/name';
export const USER_PASSWORD_URL= '/users/password';
export const SIGNIN_USER_URL  = '/users/credentials';
export const SIGNOUT_USER_URL = '/users/credentials';

//ルーム関連のエンドポイント
export const CREATE_ROOM_URL  = '/rooms';
export const JOIN_ROOM_URL    = '/rooms';
export const GET_ROOM_INFO_URL= '/rooms';
export const LEAVE_ROOM_URL   = '/rooms';

//ゲーム関連のエンドポイント
export const IS_START_GAME_URL      = '/games';
export const GET_GAME_START_TIME_URL= '/games';
export const GAME_ENDS_URL          = '/games';
export const GET_PLAYERS_INFO_URL   = '/games/players';
export const GET_SCORE_INFO_URL     = '/games/scores';
export const GET_CHALLENGE_WEB_URL  = '/games/challenge';
export const USED_HINT_URL          = '/games/hint';
export const SEND_KEY_URL           = '/games/key';
export const GET_SOURCE_CODE_URL    = '/games/code';
export const SEND_SOURCE_CODE_URL   = '/games/code';
export const GET_FIXED_WEB_URL      = '/games/revision'