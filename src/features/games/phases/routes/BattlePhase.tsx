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
import { fetchOpponentRevisionFn } from '../../codeController/api';
import { Loading } from '@/components/Animation';
import { PHP_URL } from '@/features/config';
import { ChallengeQueryKey, fetchChallengeFn } from '../../challenge';
import { OpponentQueryKey } from '../../character';

export const BattlePhase= () => {
  const opponentRevisionQuery= useQuery( OpponentQueryKey, fetchOpponentRevisionFn );
  const challengeQuery= useQuery( ChallengeQueryKey, fetchChallengeFn );

  if( challengeQuery.isLoading && opponentRevisionQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data || !opponentRevisionQuery?.data ) return null;

  const createAbsoluteRevisionPath= `${ PHP_URL + challengeQuery.data?.targetPath + '/revision/' + opponentRevisionQuery.data?.opponentRevisionPath + '.php' }`;

  return (
    <PhaseLayout
      title='バトルフェーズ'
      phase={ PHASE.BATTLE_PHASE }
      targetPath={ createAbsoluteRevisionPath }
      redirectUrl={ REDIRECT_PATHS.BATTLE_TO_RESULT }
    >
      <PhaseContentsWrapper
        head={ <PhaseHeadContents phase={ PHASE.BATTLE_PHASE } title={'脆弱性を見つけ出して攻撃してください。'} /> }
        body={ 
          <EditorWrapper>
            <EditArea 
              fetchedCode={ opponentRevisionQuery.data?.code }
              canWrite={ false }
            />
          </EditorWrapper> }
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