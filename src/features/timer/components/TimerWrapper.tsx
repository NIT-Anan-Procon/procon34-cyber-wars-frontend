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

const _TimeArea= styled.div<{phase: string}>`
  height : 10vh;
  width  : 30rem;    
  display: flex;
  justify-content: center;
  align-items    : center;
  position  : relative;
  clip-path : polygon(0 0, 100% 0, 90% 100%, 10% 100%);
  background: 
    ${(props) => 
        props.phase === 'attack' ? colors.redAccent
        : props.phase === 'defence' ? colors.blueAccent
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
`;

const _TimerIconWrapper= styled.div<{phase: string}>`
  height    : 8rem;
  width     : 10rem;
  display   : flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-5px);
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  background: 
    ${(props) => 
        props.phase === 'attack' ? colors.redAccent
        : props.phase === 'defence' ? colors.blueAccent
        : colors.yellowAccent
    };
`;

const _TimerIcon= styled.img`
  width: 5rem;
`;

type TimerWrapperProps= {
  children: React.ReactNode;
  phase   : string
};

export const TimerWrapper= ({ children, phase }: TimerWrapperProps) => {
  return (
    <_TimerWrapper >
      <_TimeArea phase={phase}>
        { children }        
      </_TimeArea>
      <_TimerIconWrapper  phase={phase}>
        <_TimerIcon 
          src={ 
            phase === 'attack' ? attackPhase 
            : phase === 'defence' ? defencePhase
            : battlePhase
          } 
        />
      </_TimerIconWrapper>
    </_TimerWrapper>
  );
};