import { RoomIdState, authenticatedUserState, isEnterRoomState } from "@/atoms";
import { Button, Header } from "@/components/Elements";
import { Head } from "@/components/Head";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { RuleHeader } from "../components/RuleHeader";
import { colors } from "@/styles";
import { useGetRoomMember } from "../api/get_roomMember";
import { StandbyLayout } from "../components";
import { UserStatusCard } from "@/features/users/components/UserStatusCard";
import { RuleCard } from "@/features/gameRules";
import { StandbyUser } from "../components/StandbyUser";
import testIcon from '@/assets/attack_phase.svg';

const _FlexUsers= styled.div`
  height : 100%;
  width  : 100%;
  display: flex;
`;

const GameRuleStyle= styled.div`
  grid-column: 1;
  grid-row: 2 / span 4;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const UserStateCard= styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _UsersContent= styled.div`
  height : 80%;
  width  : 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BattleLogo= styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: white;
`;

const StartButton= styled(Button)`
  grid-column: 2 ;
  grid-row: 5;
`;

export const StandBy= () => {
  const authenticatedUser= useRecoilValue(authenticatedUserState);
  const userStatus= ['HOST','GUEST'];
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
          <StandbyUser 
            userName= {'kinoshita'}
            status= {'GUEST'}
            iconPath={testIcon} 
          />
        </_FlexUsers>
        {/* <RuleCard></RuleCard>
        <_UsersContent>
          <UserStatusCard 
            userName= { '木下　聡大' }
            status= { 'host' }
          />
          <BattleLogo>VS</BattleLogo>
          { isJoinedRoom 
            ? <>
                <UserStatusCard 
                  userName= { '日下　遥斗' }
                  status= { 'guest' } 
                />
                <StartButton onClick={() => navigate('attack-phase')}>Game Start</StartButton>
              </>
            : <>loading</>
          }          
        </_UsersContent> */}
      </StandbyLayout>    
    </>
  );
};