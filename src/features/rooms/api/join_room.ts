import { ROOMS_URL } from "@/config/apiEndpoints";
import axios from "axios"
import { RoomFormType } from ".."
import { useRecoilState, useSetRecoilState } from "recoil";
import { RoomIdState, isEnterRoomState } from "@/atoms";
import { useNavigate } from 'react-router';
import { INVITE_ID_KEY } from '../../../config/dataKeys';

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
      const test= true;
      if(test) {
      // if(response.data.ROOMS_ISSUCCESSFUL_KEY) {
        setRoomId(inputRoomId);
        // setIsJoinedRoom(response.data.ROOMS_ISSUCCESSFUL_KEY);
        setIsJoinedRoom(test);
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