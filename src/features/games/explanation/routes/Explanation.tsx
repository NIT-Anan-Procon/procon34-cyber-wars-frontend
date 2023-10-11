import { useNavigate } from 'react-router-dom';

import { ContentLayout }      from '@/components/Layout';
import { Button }             from '@/components/Elements';
import { EditArea, EditorWrapper } from '@/features/games/codeController';
import styled from 'styled-components';
import { colors } from '@/assets/styles';
import { ExplanationAnswer } from '../components/ExplanationAnswer';
import { useDeleteGameMutation } from '../../matching';
import { ExplanationMarkdown } from '../components/ExplanationMarkdown';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '@/components/Animation';
import { ChallengeQueryKey, fetchChallengeFn } from '../../challenge';

const _ExplanationContents= styled.div`
  height: 80vh;
  width: 100%;
  padding: 40px 10%;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const _ChallengeCodePosition= styled.div`
  height: 100%;
  width: 200rem;
  padding: 15px;
  background : ${ colors.bgDarker };
  border-radius: 5px;
  overflow: auto;
`;

const _ExplanationsWrapper= styled.div`
  height: calc(100% - 5rem);
  width: 100%;
  overflow: auto;
`;

const _RedirectButtons= styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

const $ReturnToModeButton= styled(Button)`
  height  : 6rem;
  width   : 20rem;
  right   : 40px;
  bottom  : 40px;
  border-radius: 0;
  font-size: 2rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
`;

export const Explanation= () => {
  const navigate= useNavigate();

  const endGameMutation= useDeleteGameMutation();
  const challengeQuery= useQuery(ChallengeQueryKey, fetchChallengeFn);

  if( challengeQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data ) return null;

  return (
    <ContentLayout
      headTitle= { '解説画面' }
      header   = { '解説' }
    >
      <_ExplanationContents >
        <_ChallengeCodePosition>
          <EditorWrapper >
            <EditArea code={challengeQuery?.data?.code} />
          </EditorWrapper>          
        </_ChallengeCodePosition>
        <_ExplanationsWrapper >
          <ExplanationAnswer />
          <ExplanationMarkdown />
        </_ExplanationsWrapper>
      </_ExplanationContents>
      <_RedirectButtons>
        <$ReturnToModeButton 
          type='button'
          onClick={() => {
            endGameMutation.mutateAsync( true )
            navigate('../standby')
          }}
        >
          対戦を続ける
        </$ReturnToModeButton>
        <$ReturnToModeButton
          type='button'
          onClick={() => {
            endGameMutation.mutateAsync( false )
            navigate('../../')  
          }}
        >
          モード選択へ戻る
        </$ReturnToModeButton>      
      </_RedirectButtons>
    </ContentLayout>
  );
};