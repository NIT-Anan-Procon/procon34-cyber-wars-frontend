import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { 
  PhaseStatusContents,
  PhaseLayout,
  PhaseContentsWrapper,  
} from "../components";
import { PHASE, REDIRECT_PATHS } from '../types';
import { WebViewer, WebViewerWrapper } from '@/features/webViewer';
import { EditArea } from '@/features/codeController';
import { HintButton, HintDrawer, HintListItemWrapper } from '@/features/hint';
import { isHintDrawerState } from '@/features/hint/states';
import { Button } from '@/components/Elements';
import { useSendCodeMutation } from '@/features/codeController/api/sendCode';
import { codeState } from '@/features/codeController/states';


const _PhaseContents= styled.div`
  height : 70vh;
  width  : 100%;
  display: flex;
  justify-content: center;
`;

const _PhaseContentFoot= styled.div`
  height    : 10rem;
  width     : 100%;
  position  : relative;
  bottom    : 0;
  background: #010007;
  border-top: 2px solid grey;
`;

const _SendCodeButton= styled(Button)`
  width   : 15rem;
  position: absolute;
  right   : 30px;
`;

export const DefencePhase= () => {
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const currentCode= useRecoilValue( codeState );
  const sendCodeMutation= useSendCodeMutation();

  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <PhaseStatusContents 
        phase      = { PHASE.DEFENCE_PHASE }
        targetTime = { 10000 }
        redirectUrl= { REDIRECT_PATHS.DEFENCE_TO_BATTLE }
      />
      <_PhaseContents>
        <WebViewerWrapper >
          <WebViewer phase={ PHASE.DEFENCE_PHASE } />
        </WebViewerWrapper>
        <PhaseContentsWrapper >
          <EditArea phase={PHASE.DEFENCE_PHASE}/>
          <HintButton />
          { isDrawerHint
            ? <HintDrawer
                title= {'ポイントを消費して、ヒントを閲覧'}
                body= {
                  <HintListItemWrapper>vbnm,.,mnb</HintListItemWrapper>
                }
              />
            : undefined         
          }

          {/* <_PhaseContentFoot>
            <_SendCodeButton 
              type='button'
              onClick= { async() => {
                await sendCodeMutation.mutateAsync( currentCode ) 
                alert('コードを送信しました。');
              }}
            > 
              Send 
            </_SendCodeButton>            
          </_PhaseContentFoot> */}
        </PhaseContentsWrapper>
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
      </_PhaseContents>
    </PhaseLayout>
  );
};