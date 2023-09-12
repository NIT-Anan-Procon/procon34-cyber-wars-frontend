import styled from 'styled-components';

import { colors }   from '@/assets/styles';
import attackPhase  from '@/assets/images/attack_phase.svg';
import defencePhase from '@/assets/images/defence_phase.svg';
import battlePhase  from '@/assets/images/battle_phas.svg';

const _TimerWrapper= styled.div`
  height  : 100%;
  width   : 100%;
  position: relative;
  display : flex;
  flex-direction: column;
  align-items: center;
`; 

const _TimeArea= styled.div`
  height : 10vh;
  width  : 30rem;    
  display: flex;
  justify-content: center;
  align-items    : center;
  position  : relative;
  clip-path : polygon(0 0, 100% 0, 90% 100%, 10% 100%);
  background: 
    ${(props) => 
        props.bg === 'attack' ? colors.redAccent
        : props.bg === 'defence' ? colors.blueAccent
        : colors.yellowAccent
    };
  

  &::after {
    display: block;
    height: calc(10vh - 5px);
    width : calc(30rem - 10px);

    position: absolute;
    top : 0;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    background: #000007;
    z-index: -1;
  }

  > h1 {
    font-size: 5rem;
    color: white;
  }
`;

const _PhaseIconWrapper= styled.div`
  height    : 8rem;
  width     : 10rem;
  display   : flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-5px);
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  background: 
    ${(props) => 
        props.bg === 'attack' ? colors.redAccent
        : props.bg === 'defence' ? colors.blueAccent
        : colors.yellowAccent
    };
`;

const _PhaseIcon= styled.img`
  width: 5rem;
`;

type PhaseTimerProps= {
  phaseTitle: string;
};

export const PhaseTimer= ({ phaseTitle }: PhaseTimerProps) => {
  return (
    <_TimerWrapper>
      <_TimeArea bg={phaseTitle} >
        <h1>{'05:00'}</h1>        
      </_TimeArea>
      <_PhaseIconWrapper bg={phaseTitle}>
        <_PhaseIcon 
          src={ 
            phaseTitle === 'attack' ? attackPhase 
            : phaseTitle === 'defence' ? defencePhase
            : battlePhase
          } 
        />
      </_PhaseIconWrapper>
    </_TimerWrapper>
  );
};