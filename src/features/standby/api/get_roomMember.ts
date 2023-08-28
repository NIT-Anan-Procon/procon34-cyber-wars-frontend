import { userStatus } from "@/atoms";
import { ROOMS_URL } from "@/features/rooms/api/config/rooms_endpoints";
import axios from "axios";
import { useSetRecoilState } from "recoil"

export const useGetRoomMember= () => {
  const setUserInfo= useSetRecoilState(userStatus);

  async function getRoomMember(): Promise<void> {
    try {
      const response= await axios.get(ROOMS_URL)
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