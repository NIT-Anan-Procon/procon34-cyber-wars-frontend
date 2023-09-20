import { IS_HOST_KEY, IS_STARTED_KEY, OPPONENT_NAME_KEY } from "@/config/responseKeys";
import { atom } from "recoil";

export const roomMemberInfo= atom({
  key: 'atom_roomMemberInfo',
  default: {
    [ IS_HOST_KEY ]: false,
    [ OPPONENT_NAME_KEY ]: '',
    [ IS_STARTED_KEY ]: false,
  }
});