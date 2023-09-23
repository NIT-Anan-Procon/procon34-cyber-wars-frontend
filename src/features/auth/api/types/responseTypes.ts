import { 
  USER_NAME_KEY, 
  IS_SUCCESSFUL_KEY,
  IS_LOGGED_IN_KEY,
} from "../constants";

export type AuthResponseType= {
  [ IS_SUCCESSFUL_KEY ]: boolean;
};

export type AuthenticatedResponseType= {
  [ IS_LOGGED_IN_KEY ]: boolean;
  [ USER_NAME_KEY ]   : string;
};