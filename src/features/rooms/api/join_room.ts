import { ROOMS_URL } from './config/rooms_endpoints';
import { INVITE_ID_KEY } from './config/rooms_keys';
import axios from "axios"
import { RoomFormType } from ".."
import { useRecoilState, useSetRecoilState } from "recoil";
import { RoomIdState, isEnterRoomState } from "@/atoms";
import { useNavigate } from 'react-router';

export const useJoinRoom= () => {
  const navigate= useNavigate();
  const [ roomId,setRoomId ]= useRecoilState<number>(RoomIdState);
  const setIsJoinedRoom= useSetRecoilState(isEnterRoomState);

  async function isJoinedRoom(inputRoomId: number): Promise<void>{
    try {
      const formattedJsonData= JSON.stringify({invite_id:inputRoomId});
      const response= await axios.post(
        ROOMS_URL, 
        formattedJsonData,  
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if(response.data) {
        setRoomId(inputRoomId);
        // setIsJoinedRoom(response.data);
        setIsJoinedRoom(true);
        navigate('match'); 
      } else {
        alert('ルームの参加に失敗しました。');
      }
    }
    catch(error) {
      console.log('error');
    }
  }

  return { isJoinedRoom };
}