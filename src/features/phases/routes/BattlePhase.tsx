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

export const BattlePhase= () => {

  return (
    <PhaseLayout title='バトルフェーズ'>
      <PhaseStatusContents
        phase      = { PHASE.BATTLE_PHASE }
        targetTime = { 20 }
        redirectUrl= { REDIRECT_PATHS.BATTLE_TO_RESULT }
      />
    {/*
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
      </_PhaseContents> */}
    </PhaseLayout>
  );
};