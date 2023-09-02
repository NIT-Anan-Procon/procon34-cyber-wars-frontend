import { atom } from "recoil";

export const authenticatedUserState= atom({
  key: 'authenticated-user-data',
  default: {}
})

export const userStatus= atom({
  key: 'room-member-status',
  default: {}
});