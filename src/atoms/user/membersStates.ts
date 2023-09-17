import { atom, useRecoilValue } from "recoil";
import { authenticatedUserState } from ".";

const getUserState= useRecoilValue(authenticatedUserState);
export const membersStates= atom({
  key: 'members-states',
  default: {
    userName: getUserState.userName,
    status: null
  }
})