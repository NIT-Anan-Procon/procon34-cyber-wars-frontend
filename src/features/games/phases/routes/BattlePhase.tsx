import {
  PhaseLayout,
  PhaseContentsWrapper,
  PhaseContentForm,
  PhaseHeadContents,  
} from '../components';
import { PHASE, REDIRECT_PATHS } from '../types';
import { EditArea, EditorWrapper } from '@/features/games/codeController';
import { BATTLE_SEND_KEY_URL } from '@/features/games/sendFlag';

export const BattlePhase= () => {
  return (
    <PhaseLayout
      title='バトルフェーズ'
      phase={ PHASE.BATTLE_PHASE }
      redirectUrl={ REDIRECT_PATHS.BATTLE_TO_RESULT }
    >
      <PhaseContentsWrapper
        head={ <PhaseHeadContents phase={ PHASE.BATTLE_PHASE } title={'脆弱性を見つけ出して攻撃してください。'} /> }
        body={ <EditorWrapper><EditArea phase={ PHASE.BATTLE_PHASE } /></EditorWrapper> }
        foot={
          <PhaseContentForm
            id={ 'attack-phase' }
            submitFnEndpoint={ BATTLE_SEND_KEY_URL }
          />
        }
      /> 
    </PhaseLayout>
  );
};