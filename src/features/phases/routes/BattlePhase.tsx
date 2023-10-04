import styled from 'styled-components';

import { 
  PhaseStatusContents,
  PhaseLayout,
  PhaseContentsWrapper,
  PhaseContentForm,  
} from '../components';
import { PHASE, REDIRECT_PATHS } from '../types';
import { WebViewer, WebViewerWrapper } from '@/features/webViewer';
import { EditArea, EditorWrapper } from '@/features/codeController';
import { BATTLE_SEND_KEY_URL } from '@/features/sendFlag';

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
        redirectUrl= { REDIRECT_PATHS.BATTLE_TO_RESULT }
      />
      <PhaseContentsWrapper
        phase= { PHASE.BATTLE_PHASE }
        body={
          <>
            <EditorWrapper >
              <EditArea phase={PHASE.BATTLE_PHASE }/>
            </EditorWrapper>
          </>
        }
        foot= {
          <PhaseContentForm
            id={ 'sendFlag' }
            submitFnEndpoint={ BATTLE_SEND_KEY_URL }
          />
        }
      />
    </PhaseLayout>
  );
};