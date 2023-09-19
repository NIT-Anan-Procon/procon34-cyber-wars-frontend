import { useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { EditArea } from '@/features/code';
import { DESCRIPTIONS, PHASE } from '../types';
import { useSendCode } from '@/features/code/api/sendCode';
import { codeState, hasHintState, isHintDrawerState } from '@/atoms';
import { Preview } from '@/features/preview';
import { HintButton, HintLayout, HintList } from '@/features/hint';
import { Button } from '@/components/Elements';
import { Timer, TimerWrapper } from '@/features/timer';
import { 
  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout,  
  UserBoardsLayout,
  UserScoreBoard
} from "../components";
import { queryClient } from '@/lib/react-query';

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
  const iframeRef = useRef(null);
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );

  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
          <UserScoreBoard 
            name  = {'日下 遥斗'}
            status= { 'HOST' }
            score = { 100 } 
          /> 
          {/* <TimerWrapper phase={ PHASE.DEFENCE_PHASE } >
            <Timer 
              targetTime = { 10 }
              redirectUrl= { 'battle-phase' }
            />
          </TimerWrapper> */}
          <UserScoreBoard 
            name  = {'木下 聡大'}
            status= { 'GUEST' }
            score = { 100 }           
          />
        </UserBoardsLayout>      
      </_PhaseHead>
      <_PhaseContents>
        <Preview
          iframeRef= { iframeRef }
          codePath = { '1' }
        />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.DEFENCE_PHASE } />
          <PhaseContentBody >
            <EditArea phase={ PHASE.DEFENCE_PHASE } />
            <HintButton />

                ? <HintLayout
                    title= {'ポイントを消費して、ヒントを閲覧'}
                    body= {
                      <HintList />
                    }
                />
          
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