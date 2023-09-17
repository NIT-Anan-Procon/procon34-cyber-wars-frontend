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
import { hasHintState, isHintDrawerState } from '@/atoms';
import { Preview } from '@/features/preview';
import { useSendKey } from '@/features/sendKeys';
import { DisplayHintBox, HintButton, HintForm } from '@/features/hint';
import { VulnerabilitiesLayout, VulnerabilityCheckList } from '@/features/challenge/components';
import { Button } from '@/components/Elements';
import { vulnerabiliesFormatSelector } from '@/features/challenge';

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
  const { vulnerabilities, isLoading }= useChallengeDataTranslator();
  const currentInput=useRecoilValue( vulnerabiliesFormatSelector );
  
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
          codePath = { '1' }
        />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.ATTACK_PHASE } />
          <PhaseContentBody >
            <VulnerabilitiesLayout>
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