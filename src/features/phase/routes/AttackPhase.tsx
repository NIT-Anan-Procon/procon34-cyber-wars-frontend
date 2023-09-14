import styled from 'styled-components';
import { 
  PhaseContents,
  PhaseLayout, 
  PhaseTimer, 
  UserBoardsLayout,
  UserScoreBoard
} from "../components";

import { useNavigate } from 'react-router-dom';
import { PHASE } from '../types';
import { CheckBoxList } from '@/components/Elements';
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { vulnerabilityOptionsState } from '@/atoms';

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

export const AttackPhase= () => {
  const navigate= useNavigate();
  const [ checkedOption, updateCheckedOption ]= useAtomValueChange(vulnerabilityOptionsState);

  return (
    <PhaseLayout title='アタックフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
          <UserScoreBoard 
            name  = {'日下 遥斗'}
            status= { 'HOST' }
            score = { 100 } 
          /> 
          <PhaseTimer phaseTitle={ PHASE.ATTACK_PHASE }/>
          <UserScoreBoard 
            name  = {'木下 聡大'}
            status= { 'GUEST' }
            score = { 100 }           
          />
        </UserBoardsLayout>      
      </_PhaseHead>
      <PhaseContents phaseTitle={ PHASE.ATTACK_PHASE } >
        <_EditorWrapper >
          <CheckBoxList
            values ={ ['"', '1', 'OR', '1', '='] }
            checked={ checkedOption }
            onChange={ updateCheckedOption }
          />
        </_EditorWrapper>        
      </PhaseContents>
    </PhaseLayout>
  );
};