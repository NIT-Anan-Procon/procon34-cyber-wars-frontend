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
import { useSendCode } from '../../code/api/sendCode';

const _PhaseHead= styled.div`
  height: 30vh;
  width : 100%;
  display: flex;
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
  const { sendCode }= useSendCode();
  
  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
          <UserScoreBoard 
            name  = {'日下 遥斗'}
            status= { 'HOST' }
            score = { 100 } 
          /> 
          <PhaseTimer phaseTitle={ PHASE.DEFENCE_PHASE }/>
          <UserScoreBoard 
            name  = {'木下 聡大'}
            status= { 'GUEST' }
            score = { 100 }           
          />
        </UserBoardsLayout>      
      </_PhaseHead>
      <PhaseContents phaseTitle={ PHASE.DEFENCE_PHASE } >
        <_EditorWrapper >
          <EditorForm 
            isHint = { false }
            navText= { DESCRIPTIONS.DEFENCE_PHASE }
            phase  = { PHASE.DEFENCE_PHASE }
            submitData={ sendCode }
          />
        </_EditorWrapper>        
      </PhaseContents>
    </PhaseLayout>
  );
};