import styled from 'styled-components';
import { 
  PhaseContents,
  PhaseLayout, 
  PhaseTimer, 
  UserBoardsLayout,
  UserScoreBoard
} from "../components";

import { colors } from "@/assets/styles";
import { Button, CheckBoxList } from "@/components/Elements";
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { vulnerabilityOptionsState } from '@/atoms/game';
import { useNavigate } from 'react-router-dom';
import { PHASE } from '../types';

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
  background    : #000007;
  font-size     : 1.5rem;
  overflow      : auto;
`;

export const AttackPhase= () => {
  const navigate= useNavigate();
  const [ checkedOption, updateCheckedOption ]= useAtomValueChange(vulnerabilityOptionsState);

  return (
    <PhaseLayout title='アタックフェーズ'>
      <PhaseTimer phaseTitle={ PHASE.ATTACK_PHASE }/>
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
        <_EditorWrapper>
          <CheckBoxList
            values ={['"', '1', 'OR', '1', '=']}
            checked={ checkedOption }
            onChange={ updateCheckedOption }
          />
        </_EditorWrapper>         
      </PhaseContents>
    </PhaseLayout>
  );
};