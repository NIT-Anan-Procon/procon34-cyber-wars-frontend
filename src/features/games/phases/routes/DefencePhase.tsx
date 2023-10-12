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
import { PHP_URL } from '@/features/config';
import { fetchMyRevisionPathFn, myRevisionPathQueryKey, useSendCodeMutation } from '../../codeController/api';
import { useRecoilValue } from 'recoil';
import { codeState } from '../../codeController/states';

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
  const myRevisionQuery= useQuery( myRevisionPathQueryKey, fetchMyRevisionPathFn );
  const sendCodeMutation= useSendCodeMutation();
  const codeValue= useRecoilValue( codeState );

  if( challengeQuery.isLoading && myRevisionQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data || !myRevisionQuery?.data ) return null;

  const createAbsolutePath= `${ PHP_URL + challengeQuery.data?.targetPath + '/revision/' + myRevisionQuery.data?.myRevisionPath + '.php' }`;

  return (
    <PhaseLayout
      title='ディフェンスフェーズ'
      phase={ PHASE.DEFENCE_PHASE }
      targetPath={ createAbsolutePath }
      redirectUrl={ REDIRECT_PATHS.DEFENCE_TO_BATTLE }
    >
      <PhaseContentsWrapper
        head={ <PhaseHeadContents phase={ PHASE.DEFENCE_PHASE } title={'ソースコードを書き換えて脆弱性を修正してください。'} /> }
        body={ <EditorWrapper><EditArea fetchedCode={challengeQuery?.data?.code} /></EditorWrapper> }
        foot={
          <$SendCodeButton 
            type={'button'}
            onClick={ async() => {
              await sendCodeMutation.mutateAsync( codeValue );
            }}
          >
            Send
          </$SendCodeButton>
        }
      /> 
    </PhaseLayout>
  );
};