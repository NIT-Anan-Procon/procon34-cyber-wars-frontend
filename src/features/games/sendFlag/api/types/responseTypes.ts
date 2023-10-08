import { 
  IS_CORRECT_KEY,
  IS_VALID_KEY,
  GAME_SCORE_KEY
} from '../constants';

export type SendFlagResponseType= {
  [ IS_VALID_KEY ]  : boolean;
  [ IS_CORRECT_KEY ]: boolean;
  [ GAME_SCORE_KEY ]: number;
};