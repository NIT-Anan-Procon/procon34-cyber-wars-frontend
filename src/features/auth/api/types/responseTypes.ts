import { 
  IS_SUCCESSFUL_KEY,
  IS_LOGGED_IN_KEY,
  USER_NAME_KEY
} from '../config/responseKeys';

export type AuthResponseType= {
  [ IS_SUCCESSFUL_KEY ]: boolean;
};

export type AuthenticatedResponseType= {
  [ IS_LOGGED_IN_KEY ]: boolean;
  [ USER_NAME_KEY ]   : string;
};