import { TimeLimitRequestType } from ".";

export type CreateRoomResponseType= {
  inviteId: number;
};

export type JoinRoomResponseType= {
  success: boolean;
};

export type RoomInfoResponseType= {
  host: boolean;
  opponentName: string;
  timeLimit: TimeLimitRequestType;
  started: boolean;
};