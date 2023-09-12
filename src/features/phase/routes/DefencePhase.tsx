import styled from 'styled-components';
import { 
  PhaseContents,
  PhaseLayout, 
  PhaseTimer, 
  UserBoardsLayout,
  UserScoreBoard
} from "../components";

import { useNavigate } from 'react-router-dom';
import { EditorForm } from '@/features/code';
import { DESCRIPTIONS, PHASE } from '../types';

const $MyUserScoreBoard= styled(UserScoreBoard)`
  height    : 100%;
  width     : 40rem;
  background: white;
`;

const $OpponentScoreBoard= styled(UserScoreBoard)`
  height    : 100%;
  width     : 40rem;
  background: white;
`;

const _EditorWrapper= styled.div`
  grid-column   : 2;
  grid-row      : 3;
  height        : 100%;
  width         : 100%;
  display       : flex;
  flex-direction: column;
  row-gap       : 2rem;
  background    : transparent;
  font-size     : 1.5rem;
  overflow      : auto;
`;

export const DefencePhase= () => {
  const navigate= useNavigate();
  
  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <PhaseTimer phaseTitle={ PHASE.DEFENCE_PHASE }/>
      <UserBoardsLayout>
        <$MyUserScoreBoard 
          name  = {'日下 遥斗'}
          status= { 'HOST' }
          score = { 100 } 
        />
        <$OpponentScoreBoard 
          name  = {'木下 聡大'}
          status= { 'GUEST' }
          score = { 100 }           
        />
      </UserBoardsLayout>
      <PhaseContents phaseTitle={ PHASE.DEFENCE_PHASE } >
        <_EditorWrapper >
          <EditorForm 
            isHint = { false }
            navText={ DESCRIPTIONS.DEFENCE_PHASE }
          />
        </_EditorWrapper>        
      </PhaseContents>
    </PhaseLayout>
  );
};