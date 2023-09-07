import { ROOMS_URL } from './config/rooms_endpoints';
import { INVITE_ID_KEY } from './config/rooms_keys';
import axios from "axios"
import { RoomFormType } from ".."
import { useSetRecoilState } from "recoil";
import { RoomIdState } from "@/atoms";
import { useNavigate } from 'react-router';
import { CREATE_ROOM_URL } from '@/config/apiEndpoints';

export const useCreateRoom= () => {
  const navigate= useNavigate();
  const setRoomId= useSetRecoilState<number>(RoomIdState);

  async function createRoomId(data: boolean): Promise<void>{
    try {
      const formatedJson= JSON.stringify({difficult:data});
      const response= await axios.post(
        CREATE_ROOM_URL, 
        formatedJson,  
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      setRoomId(response.data.inviteId);
      
      navigate('games/standby'); 
    }
    catch(error) {
      console.log('error');
    }
  }

  return { createRoomId };
}