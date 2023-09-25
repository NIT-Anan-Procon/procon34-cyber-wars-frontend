import styled from 'styled-components';

import { 
  PhaseStatusContents,
  PhaseLayout, 
} from '../components';
import { PHASE, REDIRECT_PATHS } from '../types';

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
        targetTime = { 1000 }
        redirectUrl= { REDIRECT_PATHS.ATTACK_TO_DEFENCE }
      />
  {/*
      <_PhaseContents>
        <Preview phase={ PHASE.ATTACK_PHASE } />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.ATTACK_PHASE } />
          <PhaseContentBody >
            <VulnerabilitiesLayout >
              <VulnerabilityCheckList />
            </VulnerabilitiesLayout>
              <HintButton />
              { !isDrawerHint 
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
              id={ 'attack_sendKey' }
              submitFnEndpoint={ ATTACK_SEND_KEY_URL }
            />
          </PhaseContentFoot>
        </PhaseContentsLayout>        
      </_PhaseContents> */}
    </PhaseLayout>
  );
};