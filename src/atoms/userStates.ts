import { atom, atomFamily } from "recoil";

export const authenticatedUserState= atom({
  key: 'authenticated-user-data',
  default: {}
})

export const UserStatusFamily= atomFamily({
  key: 'user-status',
  default: (userId) => ({
    userId,
    userName: null,
    status: undefined,
  })
});

export const UserScore= atomFamily({
  key: 'user-score-state',
  default: {
    UserStatusFamily,
    score: 20,
  }
});