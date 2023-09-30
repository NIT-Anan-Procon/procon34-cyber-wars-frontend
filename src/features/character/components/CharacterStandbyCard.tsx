import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _CharacterStandbyCard= styled.div<{status: 'HOST' | 'GUEST'}>`
  height: 25rem;
  width : 40rem;
  position  : relative;
  display   : flex;
  flex-direction: column;
  
  &::before {
    content  : '';
    position : absolute;
    height   : 100%;
    width    : 100%;
    clip-path: polygon(5% 3%, 96% 10%, 98% 89%, 1% 96%);
    background: 
    ${(props) => props.status === 'HOST'
      ? `${ colors.blueAccent }`
      : `${ colors.danger }`
    };
  };
`;

const _StandbyStatus= styled.div<{status: 'HOST' | 'GUEST'}>`
  height         : 8rem;
  width          : 20rem;
  position       : absolute;
  top            : -15px;
  left           : 0px;
  display        : flex;
  align-items    : center;
  justify-content: center;
  clip-path      : polygon(0 0, 100% 15%, 98% 100%, 3% 100%);
  background: 
    ${(props) => props.status === 'HOST'
      ? `${ colors.blueAccent }`
      : `${ colors.danger }`
    };
  z-index: 10;

  &::before {
    content   : '';
    position  : absolute;
    height    : 100%;
    width     : 100%;
    background: transparent;
    z-index   : -1;
  };

  > span {
    font-size: 3.75rem;
    color: ${ colors.bgLighter };
    transform : rotate(-3deg);
  };
`;

const _StandbyUserName= styled.div<{status: 'HOST' | 'GUEST'}>`
  height         : calc( 100% - 20px );
  width          : calc( 100% - 20px );
  position       : absolute;
  top            : 50%;
  left           : 50%;
  transform      : translate(-50%, -50%);
  display        : flex;
  align-items    : center;
  justify-content: center;

  &::before {    
    content   : '';
    position  : absolute;
    height    : 100%;
    width     : 100%;
    background: black;
    clip-path : polygon(10% 5%, 95% 10%, 94% 90%, 2% 98%);
    z-index   : 1;
  };

  > h1 {
    line-height: 10rem;
    font-size  : 5.5rem;
    color      : ${ colors.bgLighter };
    z-index    : 10;
  }
`;

type CharacterStandbyCardProps= {
  userName: string;
  status  : 'HOST' | 'GUEST';
};

export const CharacterStandbyCard= (
  {
    userName,
    status
  }: CharacterStandbyCardProps
) => {
  return (
    <_CharacterStandbyCard status={ status } >
      <_StandbyStatus status={ status } >
        <span>{ status }</span>
      </_StandbyStatus>     
      <_StandbyUserName status={ status } >
        <h1>{ userName }</h1>
      </_StandbyUserName>
    </_CharacterStandbyCard>
  );
};