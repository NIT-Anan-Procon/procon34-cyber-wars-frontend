import styled, { css } from 'styled-components';

import { SCORES_KEY, useFetchScoresQuery } from '@/features/scores';

const _CharacterScoreBoardWrapper= styled.div<CharacterScoreBoardTransTypes>`
  height     : 100%;
  width      : 40vw;
  padding-top: 10px;
  position   : relative; 
  
  ${(props) => props.status === 'HOST'
    ? css`
        &::before {
          height    : 100%;
          width     : 100%;
          content   : '';
          position  : absolute;
          clip-path : polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
          background: #2F1FF6;
        }
      `
    : css`
        &::before {
          height    : 100%;
          width     : 100%;
          content   : '';
          position  : absolute;
          clip-path : polygon(25% 0, 100% 0%, 100% 100%, 0% 100%);
          background: #CA1C1C;
        }
      `
  };
  
  ${ ( props ) => props.styles }
`;

const _CharacterIconWrapper= styled.div<CharacterScoreBoardTransTypes>`
  height         : 15rem;
  width          : 15rem;
  display        : flex;
  justify-content: center;
  position       : absolute;
  bottom         : 10px;
  background     : #d4d4d4;
  z-index        : 100;

  ${(props) => props.status === 'HOST'
      ? css` 
          left : 2rem;
          transform: rotate(-5deg);
          &::before {
            content   : '';
            height    : 100%;
            width     : 100%;
            background: black;
            z-index   : -100;
          }
        `
      : css` 
          right: 2rem;
          transform: rotate(5deg);
          &::before {
            content   : '';
            height    : 100%;
            width     : 100%;
            background: black;
            z-index   : -100;
          }
        `
  };
`;

const _CharacterIcon= styled.img`
  width      : 100%;
  display    : flex;
  align-items: center;
  justify-content: center;
`;

const _ScoreWrapper= styled.div<CharacterScoreBoardTransTypes>`
  height     : 10rem;
  width      : calc(100% - 10px);
  display    : flex;
  align-items: center;        
  position   : relative;
  background : black;
  
  ${(props) => props.status === 'HOST'
    ? css`
        padding-right  : 20px;  
        justify-content: end;
        box-shadow     : 8px 8px #2F1FF6;
      `
    : css`
        padding-left   : 20px;  
        justify-content: start;
        box-shadow     : 8px 8px #CA1C1C;
      `
  }
`;

const _Score= styled.h1`
  position : absolute;
  font-size: 5rem;
  color    : white;
  z-index  : 10;

  > span {
    margin-left: 10px;
    font-size  : 3rem;
  }
`;

const _CharacterNameWrapper= styled.div<CharacterScoreBoardTransTypes>`
  position  : relative;
  height    : 6.5rem;
  width     : 20rem;
  display   : flex;
  align-items: center;
  justify-content: center;
  background: black;
  z-index   : 100;

  ${( props ) => props.status === 'HOST'
    ? css`
        &::after {
          clip-path: polygon(0 70%, 100% 0, 100% 100%, 0% 100%)
        }
        `
      : css`
        &::after {
          clip-path: polygon(0 0, 100% 70%, 100% 100%, 0% 100%)
        }
      `  
  };
`;

const _CharacterName= styled.h1<CharacterScoreBoardTransTypes>`
  font-size: 3.5rem;
  color    : white;
  z-index  : 999;

  ${(props) => props.status === 'HOST'
      ? css`
          transform: rotate(-5deg);
        `
      : css`
          transform: rotate(5deg);
        `
    }
`;

type CharacterScoreBoardProps= {
  userName: string;
  status  : 'HOST' | 'GUEST';
  styles ?: string;
};

type CharacterScoreBoardTransTypes= Omit<CharacterScoreBoardProps, 'userName'>;

export const CharacterScoreBoard= (
  { 
    userName, 
    status,
    styles
  }: CharacterScoreBoardProps
) => {
  const scoresQuery= useFetchScoresQuery();

  if( scoresQuery.isLoading ) {
    return <>Loading</>
  };

  if( !scoresQuery.data ) return null; 

  return (
    <_CharacterScoreBoardWrapper status={ status } styles={ styles } >
      <_CharacterIconWrapper status={ status } >
        <_CharacterIcon
          src={''}
          alt= { 'icon' }
        />
      </_CharacterIconWrapper>
      <_ScoreWrapper status={ status } >
        <_Score>
          { status === 'HOST'
            ? scoresQuery.data[ SCORES_KEY ][0]
            : scoresQuery.data[ SCORES_KEY ][1]
          }
          <span>pt</span>
        </_Score>
      </_ScoreWrapper>
      <_CharacterNameWrapper status={ status } >
        <_CharacterName status={ status } >{ userName }</_CharacterName>
      </_CharacterNameWrapper>
    </_CharacterScoreBoardWrapper>
  );
};