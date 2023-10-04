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
import { Button } from '@/components/Elements';
const _SendCodeButton= styled(Button)`
  width   : 15rem;
  position: absolute;
  right   : 30px;
`;

export const DefencePhase= () => {
  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <PhaseStatusContents 
        phase      = { PHASE.DEFENCE_PHASE }
        redirectUrl= { REDIRECT_PATHS.DEFENCE_TO_BATTLE }
      />
      <PhaseContentsWrapper
        body={
          <>
            <WebViewerWrapper phase={ PHASE.DEFENCE_PHASE } >
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