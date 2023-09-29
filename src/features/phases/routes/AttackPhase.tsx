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

  return (
    <PhaseLayout title='アタックフェーズ'>
      <PhaseStatusContents 
        phase      = { PHASE.ATTACK_PHASE }
        targetTime = { 15 }
        redirectUrl= { REDIRECT_PATHS.ATTACK_TO_DEFENCE }
      />
      <_PhaseContents>
        <PhaseContentsWrapper
          body={
            <>
              <WebViewerWrapper >
                <WebViewer phase={ PHASE.ATTACK_PHASE } />
              </WebViewerWrapper>
              <VulnerabilitiesLayout >
                <VulnerabilityCheckList />
              </VulnerabilitiesLayout>                
            </>
          
          }
          foot= {
            <PhaseContentForm
              id={ 'sendFlag' }
              submitFnEndpoint={ ATTACK_SEND_KEY_URL }
            />
          }
        />
      </_PhaseContents>
    </PhaseLayout>
  );
};