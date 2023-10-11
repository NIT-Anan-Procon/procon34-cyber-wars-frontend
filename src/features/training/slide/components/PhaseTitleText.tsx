import styled from 'styled-components';

import { colors } from '@/assets/styles';
import { PHASE } from '@/features/games/phases';

const _PhaseTitleText= styled.span<{ phase: string }>`
  font-size: 2.8rem;
  font-weight: bolder;
  color: 
    ${(props) => props.phase === PHASE.ATTACK_PHASE
      ? `${ colors.redAccent }`
      : props.phase === PHASE.DEFENCE_PHASE
      ? `${ colors.blueAccent }`
      : `${ colors.yellowAccent }`
    };
`;

type PhaseTitleTextProps= {
  phase: string;
  phaseTitle: string;
};

export const PhaseTitleText= ({ phase, phaseTitle }: PhaseTitleTextProps ) => {
  return (
    <_PhaseTitleText phase={ phase } >{ phaseTitle }</_PhaseTitleText>
  );
};