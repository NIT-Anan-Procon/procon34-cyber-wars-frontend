import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { 
  PhaseStatusContents,
  PhaseLayout,
  PhaseContentsWrapper,  
} from "../components";
import { PHASE, REDIRECT_PATHS } from '../types';
import { WebViewer, WebViewerWrapper } from '@/features/webViewer';
import { EditArea, EditorWrapper } from '@/features/codeController';
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
        targetTime = { 1000 }
        redirectUrl= { REDIRECT_PATHS.DEFENCE_TO_BATTLE }
      />
      <PhaseContentsWrapper
        body={
          <>
            <WebViewerWrapper >
              <WebViewer phase={ PHASE.DEFENCE_PHASE } />
            </WebViewerWrapper>
            <EditorWrapper >
              <EditArea phase={PHASE.DEFENCE_PHASE}/>
            </EditorWrapper>
          </>
        }
        foot= {
          <_SendCodeButton>Send</_SendCodeButton>
        }
      />
    </PhaseLayout>
  );
};