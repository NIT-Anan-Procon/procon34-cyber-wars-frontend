import { 
  CODE_KEY, 
  CODE_PATH_KEY, 
  IS_VALID_KEY 
} from '..';

export type CodeResponseType= {
  [ CODE_PATH_KEY ]: number;
  [ CODE_KEY ]     : string;
};

export type SendCodeResponseType= {
  [ IS_VALID_KEY ]: boolean;
};