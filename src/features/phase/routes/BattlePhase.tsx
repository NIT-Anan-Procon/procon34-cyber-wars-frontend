import { useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { hasHintState, isHintDrawerState } from '@/atoms';
import { Preview }     from '@/features/preview';
import { DisplayHintBox, HintButton, HintForm } from '@/features/hint';
import { BATTLE_SEND_KEY_URL } from '@/config/apiUrls';
import { EditArea } from '@/features/code';
import { Timer, TimerWrapper } from '@/features/timer';
import { DESCRIPTIONS, PHASE } from '../types';
import { 
  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentForm,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout,  
  UserBoardsLayout,
  UserScoreBoard
} from '../components';

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

export const BattlePhase= () => {
  const iframeRef = useRef(null);
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );
  
  return (
    <PhaseLayout title='バトルフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
          <UserScoreBoard 
            name  = {'日下 遥斗'}
            status= { 'HOST' }
            score = { 100 } 
          /> 
          <TimerWrapper phase={ PHASE.BATTLE_PHASE } >
            <Timer 
              targetTime = { 6 }
              redirectUrl= { '../result' }
            />
          </TimerWrapper>
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
          <PhaseContentHead description={ DESCRIPTIONS.BATTLE_PHASE } />
          <PhaseContentBody >
            <EditArea phase={ PHASE.BATTLE_PHASE } />
            <HintButton />
            { isDrawerHint 
              ? hasHint ?  <DisplayHintBox /> : <HintForm />
              : undefined
            }
          </PhaseContentBody>
          <PhaseContentFoot>
            <PhaseContentForm
              id={ 'battle_sendKey' }
              submitFnEndpoint={ BATTLE_SEND_KEY_URL }
            />
          </PhaseContentFoot>
        </PhaseContentsLayout>        
      </_PhaseContents>
    </PhaseLayout>
  );
};