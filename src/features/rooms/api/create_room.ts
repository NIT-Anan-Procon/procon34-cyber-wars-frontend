import { ROOMS_URL } from "@/config/apiEndpoints";
import { INVITE_ID_KEY } from '../../../config/dataKeys';
import axios from "axios"
import { RoomFormType } from ".."
import { useSetRecoilState } from "recoil";
import { RoomIdState } from "@/atoms";
import { useNavigate } from 'react-router';


export const useCreateRoom= () => {
  const navigate= useNavigate();
  const setRoomId= useSetRecoilState<number>(RoomIdState);

  async function createRoomId(data: boolean): Promise<void>{
    try {
      const formatedJson= JSON.stringify({difficult:data});
      const response= await axios.post(
        ROOMS_URL, 
        formatedJson,  
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      //setRoomId(response.data.INVITE_ID_KEY);
      setRoomId(1234);
      navigate('match'); 
    }
    catch(error) {
      console.log('error');
    }
  }

  return { createRoomId };
}