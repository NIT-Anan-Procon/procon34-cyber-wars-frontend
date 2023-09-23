import { 
  USER_NAME_KEY, 
  USER_PASSWORD_KEY,
  IS_SUCCESSFUL_KEY,
  IS_LOGGED_IN_KEY,
} from "../constants";

export type CredentialsDTO= {
  [ USER_NAME_KEY ]    : string;
  [ USER_PASSWORD_KEY ]: string;
};

export type AuthResponseType= {
  [ IS_SUCCESSFUL_KEY ]: boolean;
};

export type AuthenticatedResponseType= {
  [ IS_LOGGED_IN_KEY ]: boolean;
  [ USER_NAME_KEY ]   : string;
};