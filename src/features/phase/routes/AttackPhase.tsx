import styled from 'styled-components';
import { 
  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentForm,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout, 
  PhaseTimer, 
  UserBoardsLayout,
  UserScoreBoard
} from '../components';

import { DESCRIPTIONS, PHASE } from '../types';
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { hasHintState, isHintDrawerState, sendKeyState, vulnerabilityListState } from '@/atoms';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { Preview } from '@/features/preview';
import { useSendKey } from '@/features/sendKeys';
import { ATTACK_SEND_KEY_URL } from '@/config/apiUrls';
import { DisplayHintBox, HintButton, HintForm } from '@/features/hint';
import { VulnerabilitiesLayout } from '@/features/challenge/components';
import { CheckBoxList } from '@/components/Elements';
import { useChallengeDataTranslator } from '@/features/challenge/hooks/challengeDataTranslator';

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
  const iframeRef = useRef(null);
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );
  const { formatedVulnerabilities, isLoading }= useChallengeDataTranslator();

  // function handleClick() {
  //   const input = iframeRef?.current.contentDocument.querySelector('input');
  //   const button = iframeRef?.current.contentDocument.querySelector('button');
  //   input.value = 'aa';
  //   button.addEventListener('click', () => {
  //     console.log('フォーカスされました');
  //   });
  //   button.click()
  // }
  
  if( isLoading ) {
    return <>Loading</>
  }

  return (
    <PhaseLayout title='アタックフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
          <UserScoreBoard 
            name  = {'日下 遥斗'}
            status= { 'HOST' }
            score = { 100 } 
          /> 
          <PhaseTimer count={''} phaseTitle={ PHASE.ATTACK_PHASE }/>
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
          <PhaseContentHead description={ DESCRIPTIONS.ATTACK_PHASE } />
          <PhaseContentBody >
            <VulnerabilitiesLayout>
              <CheckBoxList values={ formatedVulnerabilities } />
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