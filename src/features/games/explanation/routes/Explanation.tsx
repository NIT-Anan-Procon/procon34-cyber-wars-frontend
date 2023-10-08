import { useNavigate } from 'react-router-dom';

import { ContentLayout }      from '@/components/Layout';
import { Button }             from '@/components/Elements';
import { ExplanationMarkdown } from '../components';
import { EditArea, EditorWrapper } from '@/features/games/codeController';
import { PHASE } from '@/features/games/phases';
import styled from 'styled-components';
import { colors } from '@/assets/styles';
import { ExplanationAnswer } from '../components/ExplanationAnswer';

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
  height: 100%;
  width: 100%;
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

  return (
    <ContentLayout
      headTitle= { '解説画面' }
      header   = { '解説' }
    >
      <_ExplanationContents >
        <_ChallengeCodePosition>
          <EditorWrapper >
            <EditArea phase={ PHASE.DEFENCE_PHASE } />
          </EditorWrapper>          
        </_ChallengeCodePosition>
        <_ExplanationsWrapper >
          <ExplanationAnswer />
          <ExplanationMarkdown/>
        </_ExplanationsWrapper>
      </_ExplanationContents>
      <_RedirectButtons>
        <$ReturnToModeButton type='button' onClick={() => navigate('../standby')}>対戦を続ける</$ReturnToModeButton>
        <$ReturnToModeButton type='button' onClick={() => navigate('../../')}>モード選択へ戻る</$ReturnToModeButton>      
      </_RedirectButtons>
    </ContentLayout>
  );
};