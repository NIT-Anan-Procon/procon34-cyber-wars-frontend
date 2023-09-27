import React from 'react';
import styled from 'styled-components';

import { 
  PhaseStatusContents,
  PhaseLayout,
  PhaseContentsWrapper,
  PhaseContentForm, 
} from '../components';
import { PHASE, REDIRECT_PATHS } from '../types';
import { WebViewer, WebViewerWrapper } from '@/features/webViewer';
import { VulnerabilitiesLayout, VulnerabilityCheckList } from '@/features/vulnerabilities';
import { HintButton, HintDrawer } from '@/features/hint';
import { useRecoilValue } from 'recoil';
import { isHintDrawerState } from '@/features/hint/states/atom';
import { InputField } from '@/components/Form';
import { ATTACK_SEND_KEY_URL } from '@/features/sendFlag';


const _PhaseContents= styled.div`
  height : 70vh;
  width  : 100%;
  display: flex;
  justify-content: center;
`;

export const AttackPhase= () => {
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const [ text, setText ]= React.useState();

  const handleOnChange= (e) => {
    setText(e.target.value);
  };

  return (
    <PhaseLayout title='アタックフェーズ'>
      <PhaseStatusContents 
        phase      = { PHASE.ATTACK_PHASE }
        targetTime = { 100000 }
        redirectUrl= { REDIRECT_PATHS.ATTACK_TO_DEFENCE }
      />
      <_PhaseContents>
        <WebViewerWrapper >
          <WebViewer phase={ PHASE.ATTACK_PHASE } />
        </WebViewerWrapper>
        <PhaseContentsWrapper
          body={
            <VulnerabilitiesLayout >
              <VulnerabilityCheckList />
            </VulnerabilitiesLayout>              
          }
          foot= {
            <PhaseContentForm
              id={ 'sendFlag' }
              submitFnEndpoint={ ATTACK_SEND_KEY_URL }
            />
          }
        />
    

  {/*
      
        
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.ATTACK_PHASE } />
          <PhaseContentBody >
            <VulnerabilitiesLayout >
              <VulnerabilityCheckList />
            </VulnerabilitiesLayout>
        
          </PhaseContentBody>
          <PhaseContentFoot>
            <PhaseContentForm
              id={ 'attack_sendKey' }
              submitFnEndpoint={ ATTACK_SEND_KEY_URL }
            />
          </PhaseContentFoot>
        </PhaseContentsLayout>        
       */}
      </_PhaseContents>
    </PhaseLayout>
  );
};