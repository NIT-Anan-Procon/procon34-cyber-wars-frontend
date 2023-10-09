import styled from 'styled-components';

import { USER_NAME_KEY, useAuthenticatedUserQuery } from '@/features/auth';
import { CharacterScoreBoard } from '@/features/games/character';
import { Timer, TimerWrapper } from '@/features/games/gameTimer';
import { IS_HOST_KEY, OPPONENT_NAME_KEY, useFetchRoomInfoQuery } from '@/features/games/room';
import { useRecoilValue } from 'recoil';
import { settingTimeState } from '@/features/games/gameRules';
import { Loading } from '@/components/Animation';

const _PhaseStatusContentsLayout= styled.div`
  height: 18vh;
  width : 100%;
  display: flex;
`;

type PhaseHeadContentsProps= {
  phase      : string;
  redirectUrl: string;
};

export const PhaseStatusContents= (
  { 
    phase,
    redirectUrl
  }: PhaseHeadContentsProps 
) => {
  const targetTime= useRecoilValue( settingTimeState );

  const authUserQuery  = useAuthenticatedUserQuery({});
  const roomMemberQuery= useFetchRoomInfoQuery({});

  if( authUserQuery.isLoading && roomMemberQuery.isLoading ) {
    return <Loading />
  };

  if ( !authUserQuery.data || !roomMemberQuery.data ) return null;

  return (
    <_PhaseStatusContentsLayout>
      <CharacterScoreBoard
        userName= { 
          roomMemberQuery.data[ IS_HOST_KEY ]
          ? authUserQuery.data[ USER_NAME_KEY ]
          : roomMemberQuery.data[ OPPONENT_NAME_KEY ]
        }
        status  = { 'HOST' }
      />

      <TimerWrapper phase={ phase } >
        <Timer 
          targetTime = { targetTime[ phase ] * 60 }
          redirectUrl= { redirectUrl }
        />
      </TimerWrapper>
      
      <CharacterScoreBoard
        userName= {
          !roomMemberQuery.data[ IS_HOST_KEY ]
          ? authUserQuery.data[ USER_NAME_KEY ]
          : roomMemberQuery.data[ OPPONENT_NAME_KEY ]
        }
        status  = { 'GUEST' }
      />          
    </_PhaseStatusContentsLayout>
  );
};