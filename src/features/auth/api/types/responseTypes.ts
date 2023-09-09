import { ISSUCCESS_KEY, IS_SIGNEDIN, USER_NAME_KEY } from '@/config/responseKeys';

export type IsSuccessType= {
  [ ISSUCCESS_KEY ]: boolean;
};

export type IsSignedInType= {
  [ IS_SIGNEDIN ]  : boolean;
  [ USER_NAME_KEY ]: string;
};