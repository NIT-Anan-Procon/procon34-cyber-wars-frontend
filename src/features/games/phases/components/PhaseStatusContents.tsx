import styled from 'styled-components';

import { AuthenticatedUserQueryKey, fetchAuthenticatedUserFn } from '@/features/auth';
import { CharacterScoreBoard } from '@/features/games/character';
import { Timer, TimerWrapper } from '@/features/games/gameTimer';
import { fetchRoomInfoFn } from '@/features/games/room';
import { useRecoilValue } from 'recoil';
import { settingTimeState } from '@/features/games/gameRules';
import { Loading } from '@/components/Animation';
import { useQuery } from '@tanstack/react-query';
import { fetchRoomInfoQueryKey } from '../../room/api/fetchRoomInfo/fetchRoomInfoQueryKey';

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

  const authUserQuery  = useQuery( AuthenticatedUserQueryKey, fetchAuthenticatedUserFn );
  const roomMemberQuery= useQuery( fetchRoomInfoQueryKey, fetchRoomInfoFn );

  if( authUserQuery.isLoading && roomMemberQuery.isLoading ) {
    return <Loading />
  };

  if ( !authUserQuery.data || !roomMemberQuery.data ) return null;

  return (
    <_PhaseStatusContentsLayout>
      <CharacterScoreBoard
        userName= { 
          roomMemberQuery.data.host
          ? authUserQuery.data.name
          : roomMemberQuery.data.opponentName
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
          !roomMemberQuery.data.host
          ? authUserQuery.data.name
          : roomMemberQuery.data.opponentName
        }
        status  = { 'GUEST' }
      />          
    </_PhaseStatusContentsLayout>
  );
};