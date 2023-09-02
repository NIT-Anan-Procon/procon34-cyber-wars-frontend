//ユーザ認証関連のエンドポイント
export const SIGNIN_USER_URL         = import.meta.env.VITE_API_URL_USER_SIGNIN;
export const SIGNUP_USER_URL         = import.meta.env.VITE_API_URL_USER_SIGNUP;
export const SIGNOUT_USER_URL        = import.meta.env.VITE_API_URL_USER_SIGNOUT;
export const UPDATE_USER_NAME_URL    = import.meta.env.VITE_API_URL_USER_UPDATE_NAME;
export const UPDATE_USER_PASSWORD_URL= import.meta.env.VITE_API_URL_USER_UPDATE_PASSWORD;

//ルーム関連のエンドポイント
export const ROOMS_URL= import.meta.env.VITE_API_URL_ROOMS;

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