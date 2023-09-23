import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { EditArea } from '@/features/code';
import { DESCRIPTIONS, PHASE } from '../types';
import { useSendCode } from '@/features/code/api/sendCode';
import { authenticatedUserState, codeState, hasHintState, isHintDrawerState, roomMemberInfo } from '@/atoms';
import { Preview } from '@/features/preview';
import { HintButton, HintLayout, HintList } from '@/features/hint';
import { Button } from '@/components/Elements';
import { Timer, TimerWrapper, useFetchStartTime } from '@/features/timer';
import { UserBoardsLayout, UserScoreBoard } from '@/features/users';
import { 
  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout,  
} from "../components";
import { queryClient } from '@/lib/react-query';
import { fetchAuthenticatedUser } from '@/features/auth';
import { useFetchChallenge } from '@/features/challenge';
import { useScoresQuery } from '@/features/score';
import { SCORES_KEY } from '@/constants/responseKeys';
import { useRoomInfoQuery } from '@/features/rooms/api/fetchRoomInfo';

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

const _SendCodeButton= styled(Button)`
  width   : 15rem;
  position: absolute;
  right   : 30px;
`;

export const DefencePhase= () => {
  const currentCode= useRecoilValue(codeState);
  const iframeRef = useRef(null);
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );
  const authMyUser= useRecoilValue( authenticatedUserState );
  const roomMember= useRecoilValue( roomMemberInfo );
  useEffect(() => {
    startTime(),
    authUser(),
    fetchChallenge()
  },[]);
  const { startTime }= useFetchStartTime();
  const { authUser }=fetchAuthenticatedUser();
  const { fetchChallenge }= useFetchChallenge();
  const { sendCode }= useSendCode();
  const roomInfoQuery= useRoomInfoQuery({});
  
  const { data: scores, isLoading }= useScoresQuery({
    config: {
      select: ( data ) => {
        return data[ SCORES_KEY ]
      },
      refetchInterval: 1000 * 3
    }
  });

  if( isLoading) {
    return <>loading</>
  }  

  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <_PhaseHead>
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
          <TimerWrapper phase={ PHASE.DEFENCE_PHASE } >
            <Timer 
              targetTime = { 100 }
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
        <Preview phase={ PHASE.DEFENCE_PHASE } />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.DEFENCE_PHASE } />
          <PhaseContentBody >
            <EditArea phase={ PHASE.DEFENCE_PHASE } />
            <HintButton />
              { isDrawerHint
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
            <_SendCodeButton 
              type='button'
              onClick= { 
                async() => {await sendCode( currentCode ) 
                alert('コードを送信しました。');
              }}
            > 
              Send 
            </_SendCodeButton>
          </PhaseContentFoot>
        </PhaseContentsLayout>        
      </_PhaseContents>
    </PhaseLayout>
  );
};