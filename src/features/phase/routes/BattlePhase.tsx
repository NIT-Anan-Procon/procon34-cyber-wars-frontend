import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { hasHintState, isHintDrawerState } from '@/atoms';
import { Preview }     from '@/features/preview';
import { HintButton, HintLayout, HintList } from '@/features/hint';
import { BATTLE_SEND_KEY_URL } from '@/config/apiUrls';
import { EditArea } from '@/features/code';
import { Timer, TimerWrapper, useFetchStartTime } from '@/features/timer';
import { DESCRIPTIONS, PHASE } from '../types';
import { UserBoardsLayout, UserScoreBoard } from '@/features/users';
import { 
  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentForm,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout,  
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
  const { startTime }= useFetchStartTime();
  
  useEffect(() => {
    startTime()
  },[]) 

  return (
    <PhaseLayout title='バトルフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
        <UserScoreBoard
            ishost= { true }
          /> 
          <TimerWrapper phase={ PHASE.BATTLE_PHASE } >
            <Timer 
              targetTime = { 300 }
              redirectUrl= { 'result' }
            />
          </TimerWrapper>
          <UserScoreBoard 
            ishost= { false }
          />
        </UserBoardsLayout>      
      </_PhaseHead>
      <_PhaseContents>
        <Preview phase={ PHASE.BATTLE_PHASE } />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.BATTLE_PHASE } />
          <PhaseContentBody >
            <EditArea phase={ PHASE.BATTLE_PHASE } />
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