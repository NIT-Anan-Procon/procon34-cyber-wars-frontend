import styled from 'styled-components';

import { Card, CardContent, CardHeader } from '@/components/Elements';
import { RuleDescription } from './RuleDescription';
import { RuleTitle } from './RuleTitle';
import { colors } from '@/styles';

import attack_phase  from '@/assets/attack_phase.svg';
import defence_phase from '@/assets/defence_phase.svg';
import battle_phase  from '@/assets/battle_phase.svg';

const $RuleCard= styled.div`
  height   : 80vh;
  width    : 40vw;
  min-width: 40rem;
  padding  : 4rem;
  display  : grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows   : 3rem 10rem 1fr 1fr; 
  gap: 3rem;
  border-radius: 1.2rem;
  background   : #181818;
`;

const $RuleCardHeader= styled.div`
  grid-column: 1 / span 3;
  grid-row   : 1;
  text-align : start;
  display    : block;
  font-size  : 2.75rem;
  font-weight: bolder;
  color      : black;
`;

export const RuleCard= () => {
  return (
    <$RuleCard >
      <RuleTitle title={'ゲームルール'} />

    </$RuleCard>
  );
}