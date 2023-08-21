import { ROOMS_URL } from './config/rooms_endpoints';
import { INVITE_ID_KEY } from './config/rooms_keys';
import axios from "axios"
import { RoomFormType } from ".."
import { useSetRecoilState } from "recoil";
import { RoomIdState } from "@/atoms";

export const useCreateRoom= () => {
  const setRoomId= useSetRecoilState<number>(RoomIdState);

  async function createRoomId(data: boolean): Promise<void>{
    try {
      const formatedJson= JSON.stringify(data);
      const formattedJsonData= JSON.stringify(data);
      const response= await axios.post(
        ROOMS_URL, 
        formattedJsonData,  
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      //setRoomId(response.data.INVITE_ID_KEY);
      setRoomId(1234);
    }
    catch(error) {
      console.log('error');
    }
  }

  return { createRoomId };
}