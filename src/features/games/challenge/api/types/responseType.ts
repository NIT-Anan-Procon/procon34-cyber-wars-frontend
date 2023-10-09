import {
  CODE_PATH_KEY,
  CHALLENGE_CODE_KEY,
  CHALLENGE_GOAL_KEY,
  CHALLENGE_CHOICES_KEY,
  CHALLENGE_HINT_KEY,
  CHALLENGE_HINT_SCORE_KEY
} from '../constants';

export type ChallengeResponseType= {
  [ CODE_PATH_KEY ]           : number;
  [ CHALLENGE_CODE_KEY ]      : string;
  [ CHALLENGE_GOAL_KEY ]      : string;
  [ CHALLENGE_CHOICES_KEY ]   : Array<string>;
  [ CHALLENGE_HINT_KEY ]      : string;
  [ CHALLENGE_HINT_SCORE_KEY ]: number;
};