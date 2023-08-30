import { RoomIdState, authenticatedUserState, isEnterRoomState } from "@/atoms";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { useGetRoomMember } from "../api/get_roomMember";
import { StandbyLayout } from "../components";
import { StandbyUser } from "../components/StandbyUser";
import testIcon from '@/assets/attack_phase.svg';

const _FlexUsers= styled.div`
  grid-row: 2;
  height : 100%;
  width  : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap : 4.5rem;
`;

const _BattleIcon= styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: white;
`;

export const StandBy= () => {
  const authenticatedUser= useRecoilValue(authenticatedUserState);
  const roomId= useRecoilValue(RoomIdState);
  const isJoinedRoom=  useRecoilValue(isEnterRoomState);
  const getUserName= useRecoilValue(authenticatedUserState);
  const navigate= useNavigate();
  const { getRoomMember }= useGetRoomMember(); 
  
  // useEffect(() => {
  //   const interval= setInterval(() => {
  //     if(isJoinedRoom) {
  //       clearInterval(interval);
  //     } else {
  //       getRoomMember();
  //     }
  //   }, 1000);
  // },[isJoinedRoom]);
  
  return (
    <>
      <StandbyLayout>
        <_FlexUsers>
          <StandbyUser 
            userName= {'日下遥斗'}
            status= {'HOST'}
            iconPath={testIcon} 
          />
          <_BattleIcon>VS</_BattleIcon>
          { isJoinedRoom
            ?
            <StandbyUser 
              userName= {'kinoshita'}
              status= {'GUEST'}
              iconPath={testIcon} 
            /> 
            : <p>loading</p>           
          }
        </_FlexUsers>
      </StandbyLayout>    
    </>
  );
};