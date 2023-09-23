import { 
  USER_NAME_KEY, 
  USER_PASSWORD_KEY,
} from "../constants";

export type CredentialsDTO= {
  [ USER_NAME_KEY ]    : string;
  [ USER_PASSWORD_KEY ]: string;
};