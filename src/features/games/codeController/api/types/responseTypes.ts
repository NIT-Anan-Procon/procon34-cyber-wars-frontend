import {
  REVISION_PATH_KEY,
  IS_VALID_KEY,
  REVISION_CODE_KEY
} from '..';

export type SendCodeResponseType= {
  [ IS_VALID_KEY ]: boolean;
};

export type RevisionResponseType= {
  [ REVISION_PATH_KEY ]: number;
  [ REVISION_CODE_KEY ]: string;
};