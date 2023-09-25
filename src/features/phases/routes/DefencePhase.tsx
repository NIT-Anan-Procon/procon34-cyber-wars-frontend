import styled from 'styled-components';

import { 
  PhaseStatusContents,
  PhaseLayout,  
} from "../components";
import { PHASE, REDIRECT_PATHS } from '../types';

const _PhaseContents= styled.div`
  height : 70vh;
  width  : 100%;
  display: flex;
  justify-content: center;
`;

export const DefencePhase= () => {

  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <PhaseStatusContents 
        phase      = { PHASE.DEFENCE_PHASE }
        targetTime = { 20 }
        redirectUrl= { REDIRECT_PATHS.DEFENCE_TO_BATTLE }
      />
    {/*
      <_PhaseContents>
        <Preview phase={ PHASE.DEFENCE_PHASE } />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.DEFENCE_PHASE } />
          <PhaseContentBody >
            <EditArea phase={ PHASE.DEFENCE_PHASE } />
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
            <_SendCodeButton 
              type='button'
              onClick= { 
                async() => {await sendCode( currentCode ) 
                alert('コードを送信しました。');
              }}
            > 
              Send 
            </_SendCodeButton>
          </PhaseContentFoot>
        </PhaseContentsLayout>        
      </_PhaseContents> */}
    </PhaseLayout>
  );
};