import styled from 'styled-components';

import { 
  PhaseLayout,
  PhaseContentsWrapper,
  PhaseHeadContents,  
} from "../components";
import { PHASE, REDIRECT_PATHS } from '../types';
import { EditArea, EditorWrapper } from '@/features/games/codeController';
import { Button } from '@/components/Elements';
import { useQuery } from '@tanstack/react-query';
import { ChallengeQueryKey, fetchChallengeFn } from '../../challenge';
import { Loading } from '@/components/Animation';

const $SendCodeButton= styled(Button)`
  position: absolute;
  right   : 0;
  height  : 6rem;
  width   : 15rem;
  font-size: 2.6rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
`;

export const DefencePhase= () => {
  const challengeQuery= useQuery(ChallengeQueryKey, fetchChallengeFn);

  if( challengeQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data ) return null;

  return (
    <PhaseLayout
      title='ディフェンスフェーズ'
      phase={ PHASE.DEFENCE_PHASE }
      redirectUrl={ REDIRECT_PATHS.DEFENCE_TO_BATTLE }
    >
      <PhaseContentsWrapper
        head={ <PhaseHeadContents phase={ PHASE.DEFENCE_PHASE } title={'ソースコードを書き換えて脆弱性を修正してください。'} /> }
        body={ <EditorWrapper><EditArea code={challengeQuery?.data?.code} /></EditorWrapper> }
        foot={
          <$SendCodeButton>Send</$SendCodeButton>
        }
      /> 
    </PhaseLayout>
  );
};