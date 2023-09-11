import { isEnterRoomState } from "@/atoms";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { StandbyLayout } from "../components";
import { StandbyUser } from "../components/StandbyUser";
import testIcon from '@/assets/images/attack_phase.svg';
import { Button } from "@/components/Elements";

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

const $StartButton= styled(Button)`
  height  : 10rem;
  width   : 30rem;
  position: absolute;
  bottom  : 0;
  right   : 0;
`;

export const StandBy= () => {
  const isJoinedRoom=  useRecoilValue(isEnterRoomState);
  const navigate= useNavigate();
  
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
            <>
              <StandbyUser
                userName= {'木下 聡大'}
                status= {'GUEST'}
                iconPath={testIcon} 
              />          
              <$StartButton onClick={() => navigate('../phase/attack-phase')}>
                Start
              </$StartButton>   
            </>
            : <p>loading</p>           
          }
        </_FlexUsers>
      </StandbyLayout>    
    </>
  );
};