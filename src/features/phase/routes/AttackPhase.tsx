import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { ATTACK_SEND_KEY_URL } from '@/config/apiUrls';
import { Timer, TimerWrapper } from '@/features/timer';
import { DESCRIPTIONS, PHASE } from '../types';
import { hasHintState, isHintDrawerState } from '@/atoms';
import { Preview } from '@/features/preview';
import { DisplayHintBox, HintButton, HintForm } from '@/features/hint';
import { VulnerabilitiesLayout, VulnerabilityCheckList } from '@/features/challenge/components';
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

export const AttackPhase= () => {
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );

  return (
    <PhaseLayout title='アタックフェーズ'>
      <_PhaseHead >
        <UserBoardsLayout>
          <UserScoreBoard 
            name  = {'日下 遥斗'}
            status= { 'HOST' }
            score = { 100 } 
          /> 
          <TimerWrapper phase={ PHASE.ATTACK_PHASE } >
            <Timer 
              targetTime = { 3 }
              redirectUrl= { 'defence-phase' }
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
        <Preview codePath = { '1' } />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.ATTACK_PHASE } />
          <PhaseContentBody >
            <VulnerabilitiesLayout >
              <VulnerabilityCheckList />
            </VulnerabilitiesLayout>
              <HintButton />
              { isDrawerHint 
                ? hasHint ?  <DisplayHintBox /> : <HintForm />
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
      </_PhaseContents>
    </PhaseLayout>
  );
};