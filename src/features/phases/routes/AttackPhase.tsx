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
import { ATTACK_SEND_KEY_URL } from '@/features/sendFlag';

const _PhaseContents= styled.div`
  height : 70vh;
  width  : 100%;
  display: flex;
  justify-content: center;
`;

export const AttackPhase= () => {
  return (
    <PhaseLayout title='アタックフェーズ'>
      <PhaseStatusContents 
        phase      = { PHASE.ATTACK_PHASE }
        redirectUrl= { REDIRECT_PATHS.ATTACK_TO_DEFENCE }
      />
      <PhaseContentsWrapper
        phase= { PHASE.ATTACK_PHASE }
        body={
          <>
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
    </PhaseLayout>
  );
};