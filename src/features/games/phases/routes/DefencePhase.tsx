import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { 
  PhaseStatusContents,
  PhaseLayout,
  PhaseContentsWrapper,
  PhaseHeadContents,  
} from "../components";
import { PHASE, REDIRECT_PATHS } from '../types';
import { WebViewer, WebViewerWrapper } from '@/features/webViewer';
import { EditArea, EditorWrapper } from '@/features/codeController';
import { Button } from '@/components/Elements';

const $SendCodeButton= styled(Button)`
  position: absolute;
  right   : 0;
  height  : 6rem;
  width   : 15rem;
  font-size: 2.6rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
`;

export const DefencePhase= () => {
  return (
    <PhaseLayout
      title='ディフェンスフェーズ'
      phase={ PHASE.DEFENCE_PHASE }
      redirectUrl={ REDIRECT_PATHS.DEFENCE_TO_BATTLE }
    >
      <PhaseContentsWrapper
        head={ <PhaseHeadContents title={'ソースコードを書き換えて脆弱性を修正してください。'} /> }
        body={ <EditorWrapper><EditArea phase={ PHASE.DEFENCE_PHASE } /></EditorWrapper> }
        foot={
          <$SendCodeButton>Send</$SendCodeButton>
        }
      /> 
    </PhaseLayout>
  );
};