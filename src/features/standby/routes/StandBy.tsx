// import { authenticatedUserState, inviteIdState, isEnterRoomState, roomMemberInfo } from "@/atoms";
// import { useNavigate } from "react-router-dom";
// import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { CharacterStandbyCard } from "@/features/character";
import { StandbyLayout } from "../components";
import { GameRulesDescriptions, GameRulesLayout } from "@/features/gameRules";
// import { StandbyUser } from "../components/StandbyUser";
// import testIcon from '@/assets/images/attack_phase.svg';
// import { Button } from "@/components/Elements";
// import { IS_HOST_KEY, IS_STARTED_KEY, OPPONENT_NAME_KEY, USER_NAME_KEY } from "@/constants/responseKeys";
// import { startGame } from "../api/startGame";
// import { useFetchRoomInfoQuery } from "@/features/room";

// const _FlexUsers= styled.div`
//   grid-row: 2;
//   height : 100%;
//   width  : 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   column-gap : 4.5rem;
// `;

// const _BattleIcon= styled.div`
//   font-size: 5rem;
//   font-weight: bold;
//   color: white;
// `;

// const $StartButton= styled(Button)`
//   height  : 10rem;
//   width   : 30rem;
//   position: absolute;
//   bottom  : 0;
//   right   : 0;
//   clip-path: ;
// `;

const _StandbyUsers= styled.div`
  height: 100%;
  width : 100%;
  display: flex;
`

export const StandBy= () => {
  // const isJoinedRoom=  useRecoilValue(isEnterRoomState);
  // const authUserState= useRecoilValue( authenticatedUserState );
  // const roomMember= useRecoilValue( roomMemberInfo );
  // const inviteId= useRecoilValue( inviteIdState );
  // const navigate= useNavigate();

  // const roomInfoQuery= useFetchRoomInfoQuery({});

  // if( roomInfoQuery.isLoading) {
  //   return <></>
  // }
  
  return (
    <>
      <StandbyLayout>
        <GameRulesLayout>
          <GameRulesDescriptions />
        </GameRulesLayout>
        <_StandbyUsers>
          <CharacterStandbyCard
            userName= { 'kusaka' }
            status  = { 'HOST' }
          />
          VS
          <CharacterStandbyCard
            userName= { 'kinoshita' }
            status  = { 'GUEST' }
          />          
        </_StandbyUsers>
      </StandbyLayout>    
    </>
  );
};