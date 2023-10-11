import { useQuery } from '@tanstack/react-query';
import {
  PhaseLayout,
  PhaseContentsWrapper,
  PhaseContentForm,
  PhaseHeadContents,  
} from '../components';
import { PHASE, REDIRECT_PATHS } from '../types';
import { EditArea, EditorWrapper } from '@/features/games/codeController';
import { BATTLE_SEND_KEY_URL } from '@/features/games/sendFlag';
import { RevisionCodeQueryKey, fetchRevisionCodeFn } from '../../codeController/api';
import { Loading } from '@/components/Animation';

export const BattlePhase= () => {
  const revisionCodeQuery= useQuery( RevisionCodeQueryKey, fetchRevisionCodeFn );

  if( revisionCodeQuery.isLoading ) {
    return <Loading />
  };

  if( !revisionCodeQuery?.data ) return null;

  return (
    <PhaseLayout
      title='バトルフェーズ'
      phase={ PHASE.BATTLE_PHASE }
      redirectUrl={ REDIRECT_PATHS.BATTLE_TO_RESULT }
    >
      <PhaseContentsWrapper
        head={ <PhaseHeadContents phase={ PHASE.BATTLE_PHASE } title={'脆弱性を見つけ出して攻撃してください。'} /> }
        body={ <EditorWrapper><EditArea code={revisionCodeQuery?.data?.code} /></EditorWrapper> }
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