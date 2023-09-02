//ユーザ認証関連のエンドポイント
export const SIGNUP_USER_URL  = '/user';
export const UPDATE_USER_NAME_URL    = '/user/name';
export const UPDATE_USER_PASSWORD_URL= '/user/password';
export const SIGNIN_USER_URL = '/user/credential';
export const IS_LOGGEDIN_URL = '/user/credential'
export const SIGNOUT_USER_URL= '/user/credential';

//ルーム関連のエンドポイント
export const CREATE_ROOM_URL  = '/room';
export const JOIN_ROOM_URL    = '/room';
export const GET_ROOM_INFO_URL= '/room';
export const LEAVE_ROOM_URL   = '/room';

//ゲーム関連のエンドポイント
export const IS_START_GAME_URL      = '/game';
export const GET_GAME_START_TIME_URL= '/game/start-time';
export const GAME_ENDS_URL          = '/game';
export const GET_PLAYERS_INFO_URL   = '/game/players';
export const GET_SCORE_INFO_URL     = '/game/scores';
export const GET_CHALLENGE_WEB_URL  = '/game/challenge';
export const USED_HINT_URL          = '/game/hint';
export const SEND_KEY_URL           = '/game/key';
export const GET_SOURCE_CODE_URL    = '/game/code';
export const SEND_SOURCE_CODE_URL   = '/game/code';
export const GET_FIXED_WEB_URL      = '/game/revision'