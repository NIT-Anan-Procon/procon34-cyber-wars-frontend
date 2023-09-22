import { 
  INVITE_ID_KEY, 
  IS_HOST_KEY, 
  IS_STARTED_KEY, 
  IS_SUCCESSFUL_KEY, 
  OPPONENT_NAME_KEY 
} from "../constants";

export type CreateRoomResponseType= {
  [ INVITE_ID_KEY ]: number;
};

export type JoinRoomResponseType= {
  [ IS_SUCCESSFUL_KEY ]: boolean;
};

export type RoomInfoResponseType= {
  [ IS_HOST_KEY ]      : boolean;
  [ OPPONENT_NAME_KEY ]: string;
  [ IS_STARTED_KEY ]   : boolean;
};