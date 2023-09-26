import React from 'react';
import styled from 'styled-components';

import { 
  PhaseStatusContents,
  PhaseLayout,
  PhaseContentsWrapper, 
} from '../components';
import { PHASE, REDIRECT_PATHS } from '../types';
import { WebViewer } from '@/features/webViewer';
import { VulnerabilitiesLayout, VulnerabilityCheckList } from '@/features/vulnerabilities';
import { HintButton, HintDrawer } from '@/features/hint';
import { useRecoilValue } from 'recoil';
import { isHintDrawerState } from '@/features/hint/states/atom';


const _PhaseContents= styled.div`
  height : 70vh;
  width  : 100%;
  display: flex;
  justify-content: center;
`;

export const AttackPhase= () => {
  const isDrawerHint= useRecoilValue( isHintDrawerState );

  return (
    <PhaseLayout title='アタックフェーズ'>
      <PhaseStatusContents 
        phase      = { PHASE.ATTACK_PHASE }
        targetTime = { 100000 }
        redirectUrl= { REDIRECT_PATHS.ATTACK_TO_DEFENCE }
      />
      <_PhaseContents>
        <WebViewer phase={ PHASE.ATTACK_PHASE } />
        <PhaseContentsWrapper >
          <VulnerabilitiesLayout >
            <VulnerabilityCheckList />
          </VulnerabilitiesLayout>              
          <HintButton />
          { !isDrawerHint 
            ? <HintDrawer
                title= {'ポイントを消費して、ヒントを閲覧'}
                body= {
                  <div></div>
                }
              />
            : undefined
          }       
        </PhaseContentsWrapper>
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