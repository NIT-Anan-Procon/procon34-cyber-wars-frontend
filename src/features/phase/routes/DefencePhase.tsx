import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { EditArea } from '@/features/code';
import { DESCRIPTIONS, PHASE } from '../types';
import { useSendCode } from '@/features/code/api/sendCode';
import { authenticatedUserState, codeState, hasHintState, isHintDrawerState } from '@/atoms';
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
  const authMyUser= useRecoilValue( authenticatedUserState );
  const iframeRef = useRef(null);
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );

  const { sendCode }= useSendCode();
  const { startTime }= useFetchStartTime();
  const { authUser }= fetchAuthenticatedUser();
  const { fetchChallenge }= useFetchChallenge();

  useEffect(() => {
    startTime(),
    authUser(),
    fetchChallenge()
  },[]);


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
          <TimerWrapper phase={ PHASE.ATTACK_PHASE } >
            <Timer 
              targetTime = { 300 }
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
              onClick= { async() => await sendCode( currentCode ) }
            > 
              Send 
            </_SendCodeButton>
          </PhaseContentFoot>
        </PhaseContentsLayout>        
      </_PhaseContents>
    </PhaseLayout>
  );
};