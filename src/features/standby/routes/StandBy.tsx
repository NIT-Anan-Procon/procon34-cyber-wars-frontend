import styled from 'styled-components';

import { colors }        from '@/assets/styles';
import { StandbyLayout } from '../components';
import { CharacterStandbyCard } from '@/features/character';
import { GameRulesDescriptions, GameRulesLayout } from '@/features/gameRules';

const _StandbyUsers= styled.div`
  height: 100%;
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5%;
`;

const _FightTypo= styled.span`
  font-size: 5.5rem;
  color    : ${ colors.bgLighter };
  text-shadow: 3px 10px black;
`;

export const StandBy= () => {
  return (
    <StandbyLayout>
      <_StandbyUsers>
        <CharacterStandbyCard
          userName= { 'KUSAKA' }
          status  = { 'HOST' }
        />
        <_FightTypo>VS</_FightTypo>
        <CharacterStandbyCard
          userName= { 'KINOSHITA' }
          status  = { 'GUEST' }
        />          
      </_StandbyUsers>
      <GameRulesLayout>
        <GameRulesDescriptions />
      </GameRulesLayout>
    </StandbyLayout>    
  );
};