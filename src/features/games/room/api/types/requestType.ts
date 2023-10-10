import { INVITE_ID_KEY, IS_DIFFICULT_KEY } from '..';

export type CreateRoomRequestType= {
  [ IS_DIFFICULT_KEY ]: boolean;
};

export type JoinRoomRequestType= {
  [ INVITE_ID_KEY ]: number;
};  