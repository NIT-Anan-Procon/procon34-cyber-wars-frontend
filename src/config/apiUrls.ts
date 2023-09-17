const API_URL= import.meta.env.VITE_API_URL;

export const SIGNUP_USER_URL         = `${API_URL} + /user`;
export const UPDATE_USER_NAME_URL    = `${ API_URL } + /user/name`;
export const UPDATE_USER_PASSWORD_URL= `${ API_URL } + /user/password`;
export const SIGNIN_USER_URL         = `${ API_URL } + /user/credential`;
export const IS_SIGNEDIN_URL         = `${ API_URL } + /user/credential`;
export const SIGNOUT_USER_URL        = `${ API_URL } + /user/credential`;

export const ROOM_URL  = `${ API_URL } + /room`;

export const START_GAME_URL           = `${ API_URL } + /game`
export const FETCH_GAME_START_TIME_URL= `${ API_URL } + /game/start-time`;
export const GAME_OPPONENT_NAME_URL   = `${ API_URL } + /game/opponent-name`;
export const GAME_SCORES_URL          = `${ API_URL } + /game/scores`;
export const ATTACK_CHALLENGE_URL     = `${ API_URL } + /game/attack/challenge`;
export const ATTACK_HINT_URL          = `${ API_URL } + /game/attack/hint`;
export const ATTACK_SEND_KEY_URL      = `${ API_URL } + /game/attack/key`;
export const DEFENCE_CODE_URL         = `${ API_URL } + /game/defence/code`;
export const BATTLE_REVISION_URL      = `${ API_URL } + /game/battle/revision`;
export const BATTLE_SEND_KEY_URL      = `${ API_URL } + /game/battle/key`;