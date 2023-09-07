import styled from 'styled-components';
import { 
  PhaseLayout, 
  PhaseTimer, 
  UserBoardsLayout,
  UserScoreBoard
} from "../components";

import { colors } from "@/assets/styles";
import { Button, CheckBoxList } from "@/components/Elements";
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { vulnerabilityOptionState } from '@/atoms/games';
import { useNavigate } from 'react-router-dom';

const $PhaseTimer= styled(PhaseTimer)`
  grid-column: 1 / span 2;
  grid-row   : 1;
  width      : 100vw;
  height     : 10vh;
`;

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

const _Preview= styled.iframe`
  grid-column: 1;
  grid-row   : 3;
  width      : 100%;
  height     : 100%;
  border     : none;
  outline    : none;
  background : white;
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

const _EditorHead= styled.div`
  height: 10rem;
  width : 100%;
  padding-left: 3.5rem;
  display: flex;
  align-items: center;
  background:#000007;

  > span {
    font-size: 1.8rem;
    font-weight: bolder;
    color : ${ colors.primary };
  }
`;

const _EditorFoot= styled.div`
  height: 8rem;
  width : 100%;
  display: flex;
  justify-content: end;
  position: relative;
  bottom  : 0;
  background: #000007;
`;

const $SendButton= styled(Button)`
  height: 5rem;
  width: 20rem;
`;

export const AttackPhase= () => {
  const navigate= useNavigate();
  const [ checkedOption, updateCheckedOption ]= useAtomValueChange(vulnerabilityOptionState);

  return (
    <PhaseLayout title='アタックフェーズ'>
      <$PhaseTimer phaseTitle={'attack'}/>
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
      <_EditorWrapper >
        <_EditorHead >
          <span>ソースコードを並べ替えて攻撃文を完成させてください</span>
        </_EditorHead>
        <CheckBoxList
          values ={['"', '1', 'OR', '1', '=']}
          checked={ checkedOption }
          onChange={ updateCheckedOption }
        />
        <_EditorFoot>
          <$SendButton type='button' onClick={() => navigate('../defence-phase')} >Send</$SendButton>
        </_EditorFoot>
      </_EditorWrapper>
      <_Preview src={'@/mocks/challengeData/mock_challenge.php'} />
    </PhaseLayout>
  );
};