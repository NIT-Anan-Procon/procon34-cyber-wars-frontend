import styled, { css }     from 'styled-components';

import { colors } from '@/assets/styles';

const _ResultUserCard= styled.div<{usertype: 'MYUSER' | 'OPPONENTUSER'}>`
  height    : 20rem;
  width     : 60rem;
  font-size : 3rem;
  position  : relative;
  background: transparent;
`;

const _CharacterNameWrapper= styled.div<CharacterScoreBoardTransTypes>`
  margin    : 0 20px;
  height    : calc( 50% - 10px );
  width     : 60%;
  display   : flex;
  align-items: center;
  justify-content: center;
  background: ${ colors.bgLighter };
  clip-path: 
    ${(props) => props.status === 'HOST' 
        ? `polygon(0 0, 100% 16%, 97% 100%, 4% 100%)`
        : `polygon(0 12%, 100% 0, 97% 100%, 3% 100%)`
    };
  z-index   : 100;
`;

const _CharacterName= styled.h1<CharacterScoreBoardTransTypes>`
  font-size: 3.8rem;
  z-index  : 999;
    
  ${(props) => props.status === 'HOST'
      ? css`
          color: #2F1FF6;
          transform: skew( 3deg );
        `
      : css`
          color: ${ colors.redAccent };
          transform: skew( -3deg );
      `
  };
`;
const _UserNameWrapper= styled.div<{usertype: 'MYUSER' | 'OPPONENTUSER'}>`
  margin    : 0 20px;
  height    : calc( 50% - 10px );
  width     : 60%;
  display   : flex;
  align-items: center;
  justify-content: center;
  background: ${ colors.bgLighter };
  clip-path: 
    ${(props) => props.status === 'HOST' 
        ? `polygon(0 0, 100% 16%, 97% 100%, 4% 100%)`
        : `polygon(0 12%, 100% 0, 97% 100%, 3% 100%)`
    };
  z-index   : 100;
`;

const _UserName= styled.h1`
  font-size: 3.8rem;
  z-index  : 999;
    
  ${(props) => props.status === 'HOST'
      ? css`
          color: #2F1FF6;
          transform: skew( 3deg );
        `
      : css`
          color: ${ colors.redAccent };
          transform: skew( -3deg );
      `
  };
`;

const _ResultScore= styled.div`
  height: 100%;
  width : 100%;
  position: relative;
  display : flex;
  flex-direction : column;
  justify-content: center;
  color    : white;

  &::before,
  &::after {
    content : '';
    position: absolute;
    height  : 100%;
    width   : 100%;
  }

  &::before {
    background: ${ colors.bgDarker };
    clip-path : polygon(2% 5%, 97% 6%, 96% 98%, 2% 96%);
    z-index   : 2;
  }
  
  &::after {
    background: ${ colors.bgLighter };
    clip-path : polygon(64% 1%, 100% 2%, 98% 100%, 0 100%, 0 3%);
    z-index   : 1;
  }


  > span {
    margin-top: 40px;
    margin-left: 30px;
    line-height: 1rem;
    font-size: 5rem;
    z-index  : 10;
  }

  > h1 {
    display: flex;
    justify-content: center;
    font-size: 12rem;
    z-index: 10;
  }

  > p {
    position : absolute;
    right    : 40px;
    bottom   : 20px;
    font-size: 4rem;
    z-index  : 10;
  }
`;

type ResultUserCardProps= {
  name    : string;
  score   : number;
  usertype: 'MYUSER' | 'OPPONENTUSER';
};

export const ResultUserCard= (
  { 
    name, 
    score, 
    usertype
  }: ResultUserCardProps
) => {
  return (
    <_ResultUserCard usertype={usertype} >
      <_UserNameWrapper usertype={usertype} >
        <_UserName>{ name }</_UserName>        
      </_UserNameWrapper>
      <_ResultScore>
        <span>Score</span>
        <h1>{ score }</h1>
        <p>pt</p>
      </_ResultScore>
    </_ResultUserCard>
  );
};