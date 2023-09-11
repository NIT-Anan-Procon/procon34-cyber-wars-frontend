import { atom } from "recoil";

export const authenticatedUserState= atom({
  key: 'atom_authenticated-user-data',
  default: {}
})

export const userStatus= atom({
  key: 'atom_room-member-status',
  default: {}
});