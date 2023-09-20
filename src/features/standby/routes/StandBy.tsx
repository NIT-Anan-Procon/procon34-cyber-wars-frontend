import { authenticatedUserState, inviteIdState, isEnterRoomState, roomMemberInfo } from "@/atoms";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { StandbyLayout } from "../components";
import { StandbyUser } from "../components/StandbyUser";
import testIcon from '@/assets/images/attack_phase.svg';
import { Button } from "@/components/Elements";
import { IS_HOST_KEY, IS_STARTED_KEY, OPPONENT_NAME_KEY, USER_NAME_KEY } from "@/config/responseKeys";
import { useRoomInfoQuery } from '../../rooms/api/fetchRoomInfo';
import { startGame } from "../api/startGame";

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
  clip-path: ;
`;

export const StandBy= () => {
  const isJoinedRoom=  useRecoilValue(isEnterRoomState);
  const authUserState= useRecoilValue( authenticatedUserState );
  const roomMember= useRecoilValue( roomMemberInfo );
  const inviteId= useRecoilValue( inviteIdState );
  const navigate= useNavigate();

  // const authUserQuery= useAuthUserQuery({});
  const { data: roomInfoQuery, isLoading, isSuccess }= useRoomInfoQuery({
    config: {
      refetchInterval: (data) => data?.[ IS_STARTED_KEY ] ? 0 : 1000
    }
  });

  if( isLoading) {
    return <></>
  }

  // if(authUserQuery.isLoading) {
  //   return <></>
  // }
  // if( info?.[ OPPONENT_NAME_KEY ]=== null && !isSuccess) {
  //   deleteRoom();
  //   navigate('../..');
  // }
  
  return (
    <>
      <StandbyLayout>
        <_FlexUsers>
          <StandbyUser 
            userName= {
              roomInfoQuery?.[ IS_HOST_KEY ]
              ? authUserState[ USER_NAME_KEY ]
              : roomInfoQuery?.[ OPPONENT_NAME_KEY ]
            }
            ishost  = { true }
            iconPath={testIcon} 
          />
          <_BattleIcon>VS</_BattleIcon>
          { isSuccess
            ?
            <>
              <StandbyUser
                userName= {
                  ! roomInfoQuery?.[ IS_HOST_KEY ]
                  ? authUserState[ USER_NAME_KEY ]
                  : roomInfoQuery?.[ OPPONENT_NAME_KEY ]
                }
                ishost  = { false }
                iconPath= { testIcon } 
              />          
            </>
            : <p>対戦相手を待っています...</p>           
          }
          { roomInfoQuery?.[ IS_HOST_KEY ] 
            ?
              <$StartButton 
                onClick={ async() => {
                  await startGame(),
                  navigate('../phase/attack-phase')
                }}
              >
                ゲーム開始
              </$StartButton>
            : undefined          
          }
        </_FlexUsers>
      </StandbyLayout>    
    </>
  );
};