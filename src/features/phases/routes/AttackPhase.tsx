import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// import { ATTACK_SEND_KEY_URL } from '@/constants/apiUrls';
// import { Timer, TimerWrapper, useFetchStartTime } from '@/features/timer';
// import { DESCRIPTIONS, PHASE } from '../types';
// import { authenticatedUserState, hasHintState, isHintDrawerState, isValidState, roomMemberInfo } from '@/atoms';
// import { Preview } from '@/features/preview';
// import { HintButton, HintLayout, HintList } from '@/features/hint';
// import { VulnerabilitiesLayout } from '@/features/challenge/components';
// import { UserBoardsLayout, UserScoreBoard } from '@/features/users';
import { useEffect } from 'react';
// import { fetchAuthenticatedUser } from '@/features/auth';
import { 
  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentForm,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout, 
} from '../components';
// import { useFetchChallenge } from '@/features/challenge';
// import { useRoomInfoQuery } from '@/features/rooms/api/fetchRoomInfo';
// import { VulnerabilityCheckList } from '../../challenge/components/VulnerabilityCheckList';
// import { useScoresQuery } from '@/features/score';
import { SCORES_KEY } from '@/constants/responseKeys';


const _PhaseHead= styled.div`
  height: 30vh;
  width : 100%;
  display: flex;
`;

const _PhaseContents= styled.div`
  height : 70vh;
  width  : 100%;
  display: flex;
  justify-content: center;
`;

export const AttackPhase= () => {
  // const isDrawerHint= useRecoilValue( isHintDrawerState );
  // const authMyUser= useRecoilValue( authenticatedUserState );
  // const roomMember= useRecoilValue( roomMemberInfo );
  // useEffect(() => {
  //   startTime(),
  //   authUser(),
  //   fetchChallenge()
  // },[]);
  // const { startTime }= useFetchStartTime();
  // const { authUser }=fetchAuthenticatedUser();
  // const { fetchChallenge }= useFetchChallenge();
  // const roomInfoQuery= useRoomInfoQuery({});
  
  // const { data: scores, isLoading }= useScoresQuery({
  //   config: {
  //     select: ( data ) => {
  //       return data[ SCORES_KEY ]
  //     },
  //     refetchInterval: 1000 * 3
  //   }
  // });

  // if( isLoading) {
  //   return <>loading</>
  // }  

  return (
    <PhaseLayout title='アタックフェーズ'>
      {/* <_PhaseHead >
        <UserBoardsLayout>
          <UserScoreBoard
            userName={
              roomMember.host
              ? authMyUser.name
              : roomMember.opponentName
            }
            ishost= { true }
            score={
              roomMember.host
              ? scores[0]
              : scores[1]
            }
          /> 
          <TimerWrapper phase={ PHASE.ATTACK_PHASE } >
            <Timer 
              targetTime = { 120 }
              redirectUrl= { 'defence-phase' }
            />
          </TimerWrapper>
          <UserScoreBoard 
            userName={
              !roomMember.host
              ? authMyUser.name
              : roomMember.opponentName
            }
            ishost= { false }
            score={
              !roomMember.host
              ? scores[0]
              : scores[1]
            }
          />
        </UserBoardsLayout>      
      </_PhaseHead>
      <_PhaseContents>
        <Preview phase={ PHASE.ATTACK_PHASE } />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.ATTACK_PHASE } />
          <PhaseContentBody >
            <VulnerabilitiesLayout >
              <VulnerabilityCheckList />
            </VulnerabilitiesLayout>
              <HintButton />
              { !isDrawerHint 
                ? <HintLayout
                    title= {'ポイントを消費して、ヒントを閲覧'}
                    body= {
                      <HintList />
                    }
                />
                : undefined
              }               
          </PhaseContentBody>
          <PhaseContentFoot>
            <PhaseContentForm
              id={ 'attack_sendKey' }
              submitFnEndpoint={ ATTACK_SEND_KEY_URL }
            />
          </PhaseContentFoot>
        </PhaseContentsLayout>        
      </_PhaseContents> */}
    </PhaseLayout>
  );
};