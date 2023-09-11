import { userStatus } from "@/atoms";
import { ROOM_URL } from '@/config/apiEndpoints';
import axios from "axios";
import { useSetRecoilState } from "recoil"

export const getRoomInfo= () => {
  const setUserInfo= useSetRecoilState(userStatus);

  async function getRoomMember(): Promise<void> {
    try {
      const response= await axios.get(ROOM_URL)
      // setUserInfo(response.data);
      setUserInfo({host: 'sato', guest: 'kusaka'});
      console.log('success');
    }
    catch (error) {
      console.log('error');
    }
  }

  return { getRoomMember }
}