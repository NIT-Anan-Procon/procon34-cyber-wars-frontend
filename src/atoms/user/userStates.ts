import { IS_SIGNEDIN, USER_NAME_KEY } from "@/config/responseKeys";
import { atom } from "recoil";

export const authenticatedUserState= atom({
  key: 'atom_authenticated-user-data',
  default: {
    [ IS_SIGNEDIN]: false,
    [ USER_NAME_KEY ]: null
  }
})

export const userStatus= atom({
  key: 'atom_room-member-status',
  default: {}
});