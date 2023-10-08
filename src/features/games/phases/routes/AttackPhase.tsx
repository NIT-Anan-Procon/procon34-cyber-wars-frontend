import React from 'react';
import styled from 'styled-components';

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

const _PhaseContents= styled.div`
  height : 70vh;
  width  : 100%;
  display: flex;
  justify-content: center;
`;

export const AttackPhase= () => {
  const isShowCode= useRecoilValue( isShowCodeState );

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
          ? <EditorWrapper><EditArea phase={ PHASE.DEFENCE_PHASE } /></EditorWrapper>
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