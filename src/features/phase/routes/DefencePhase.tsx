import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { EditArea } from '@/features/code';
import { DESCRIPTIONS, PHASE } from '../types';
import { useSendCode } from '@/features/code/api/sendCode';
import { codeState, hasHintState, isHintDrawerState } from '@/atoms';
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
  const { sendCode }= useSendCode();
  const { startTime }= useFetchStartTime();
  const { authUser }= fetchAuthenticatedUser();
  const iframeRef = useRef(null);
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );

  useEffect(() => {
    startTime(),
    authUser()
  },[]);

  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
        <UserScoreBoard
            ishost= { true }
          /> 
          <TimerWrapper phase={ PHASE.DEFENCE_PHASE } >
            <Timer 
              targetTime = { 300 }
              redirectUrl= { 'battle-phase' }
            />
          </TimerWrapper>
          <UserScoreBoard 
            ishost= { false }
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