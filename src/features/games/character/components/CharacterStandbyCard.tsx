import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _CharacterStandbyCard= styled.div<{status: 'HOST' | 'GUEST'}>`
  height: 10rem;
  width : 40rem;
  position  : relative;
  display   : flex;
  flex-direction: column;
  
  &::before {
    content  : '';
    position : absolute;
    height   : 100%;
    width    : 100%;
    clip-path: polygon(2% 7%, 98% 5%, 95% 95%, 5% 97%);
    background:
    ${(props) => props.status === 'HOST'
      ? `#2F1FF6`
      : `${ colors.redAccent }`
    };
  };
`;

const _StandbyStatus= styled.div<{status: 'HOST' | 'GUEST'}>`
  height         : 5rem;
  width          : 15rem;
  position       : absolute;
  top            : -30px;
  left           : 0px;
  display        : flex;
  align-items    : center;
  justify-content: center;
  //clip-path      : polygon(0 0, 100% 15%, 98% 100%, 3% 100%);
  background: 
    ${(props) => props.status === 'HOST'
      ? `#2F1FF6`
      : `${ colors.redAccent }`
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
    font-size: 2.75rem;
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
    clip-path: polygon(2% 3%, 96% 7%, 97% 98%, 6% 97%);
    z-index   : 1;
  };

  > h1 {
    height         : 100%;
    width          :100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.5rem;
    color    : ${ colors.bgLighter };
    z-index  : 10;
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