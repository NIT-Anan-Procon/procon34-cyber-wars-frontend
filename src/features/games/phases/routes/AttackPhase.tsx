import { 
  PhaseLayout,
  PhaseContentsWrapper,
  PhaseContentForm,
  PhaseHeadContents, 
} from '../components';
import { PHASE, REDIRECT_PATHS } from '../types';
import { ATTACK_SEND_KEY_URL } from '@/features/games/sendFlag';
import { EditArea, EditorWrapper } from '@/features/games/codeController';
import { useRecoilValue } from 'recoil';
import { isShowCodeState } from '@/features/games/codeController/states';
import { ChoicesWrapper } from '../../choices/components/ChoicesWrapper';
import { Loading } from '@/components/Animation';
import { useQuery } from '@tanstack/react-query';
import { ChallengeQueryKey, fetchChallengeFn } from '../../challenge';

export const AttackPhase= () => {
  const isShowCode= useRecoilValue( isShowCodeState );
  const challengeQuery= useQuery(ChallengeQueryKey, fetchChallengeFn);

  if( challengeQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data ) return null;

  return (    
    <PhaseLayout
      title='アタックフェーズ'
      phase={ PHASE.ATTACK_PHASE }
      redirectUrl={ REDIRECT_PATHS.ATTACK_TO_DEFENCE }
    >
      <PhaseContentsWrapper
        head={ 
          <PhaseHeadContents 
            phase={ PHASE.ATTACK_PHASE }
            title={'選択肢から攻撃文を作成してください。'}
          />
        }
        body={
          isShowCode
          ? <EditorWrapper><EditArea code={challengeQuery?.data?.code} /></EditorWrapper>
          : <ChoicesWrapper />
        }
        foot={
          <PhaseContentForm
            id={ 'attack-phase' }
            submitFnEndpoint={ ATTACK_SEND_KEY_URL }
          />
        }
      /> 
    </PhaseLayout>
  );
};