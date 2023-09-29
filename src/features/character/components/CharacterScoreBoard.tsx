import styled, { css } from 'styled-components';

import { SCORES_KEY, useFetchScoresQuery } from '@/features/scores';
import { colors } from '@/assets/styles';

const _CharacterScoreBoardWrapper= styled.div<CharacterScoreBoardTransTypes>`
  height     : 100%;
  width      : 50vw;
  padding    : 0 20px;
  display    : grid;
  grid-template-rows   : 30% 70%;
  position   : relative;
  margin-top : 10px; 
  
  &::before {
    height  : 50%;
    width   : calc( 100% - 20px );
    content : '';
    position: absolute;
    bottom  : 0;  
  };

  ${(props) => props.status === 'HOST'
    ? css`
        grid-template-columns: 20rem 1fr;
        &::before {
          /* clip-path: polygon(0 5%, 96% 0, 93% 100%, 0 75%);
          background: #2F1FF6; */
        }
      `
    : css`
        grid-template-columns: 1fr 20rem;
        &::before {
          /* clip-path: polygon(4% 0, 100% 5%, 100% 75%, 7% 100%);
          background: #CA1C1C; */
        }
      `
  };
  
  ${ ( props ) => props.styles }
`;

const _CharacterIconWrapper= styled.div<CharacterScoreBoardTransTypes>`
  grid-row       : 1 / span 2;
  height         : 15rem;
  width          : 20rem;
  position       : relative;
  display        : flex;
  justify-content: center;
  background     : ${ colors.bgLighter };
  z-index        : 0;

  ${(props) => props.status === 'HOST'
      ? css`
          grid-column: 1;
          &::before {
            content   : '';
            position  : absolute;
            height    : 100%;
            width     : 100%;
            background: #2b2b2b;
            z-index   : -100;
            transform: skew(3deg);
          }
        `
      : css`
          grid-column: 2;
          
          /* &::before {
            content   : '';
            height    : 100%;
            width     : 100%;
            background: black;
            z-index   : -100;
          } */
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
  grid-row   : 2;
  height     : 100%;
  width      : 100%;
  display    : flex;
  align-items: center;
  position   : relative;
  
  &::before {
    content   : ''; 
    position  : absolute;
    bottom    : 0px;
    left      : 0px;
    height    : 100%;
    width     : 100%;
    background: black;
    
  };

  ${(props) => props.status === 'HOST'
    ? css`
        grid-column: 2;
        justify-content: center;
        &::before {
          clip-path: polygon(0 5%, 96% 0, 100% 94%, 0 75%);
        }
      `
    : css`
    grid-column: 1;
        justify-content: center;
        &::before {
          clip-path: polygon(4% 0, 100% 0, 100% 75%, 6% 100%);
        }
      `
  }
`;

const _ScoreHead= styled.div<CharacterScoreBoardTransTypes>`
  grid-row  : 1;
  position  : absolute;
  top       : -20px;
  height    : 4.5rem;
  width     : 100%;
  display   : flex;
  align-items: center;
  justify-content: center;
  background: black;
  z-index   : 100;
  
  > h1 {
    font-size: 2.5rem;
    color    : #2F1FF6;
    z-index  : 999;    
  };

  ${(props) => props.status === 'HOST'
      ? css`
          left     : 0px;
          clip-path: polygon(0 25%, 100% 0%, 100% 100%, 0 100%);
          > h1 {
            color: #2F1FF6;
          }
        `
      : css`
          right: 0px;
          clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
          > h1 {
            color: #CA1C1C;
          }
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
  grid-row  : 1;
  position  : absolute;
  padding   : 5px;
  height    : 6.5rem;
  width     : 100%;
  display   : flex;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
  z-index   : 100;
`;

const _CharacterName= styled.h1<CharacterScoreBoardTransTypes>`
  font-size: 2.5rem;
  color    : 
    ${(props) => props.status === 'HOST'
        ? '#2F1FF6'
        : '#CA1C1C'
    };
  z-index  : 999;


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
        <_CharacterNameWrapper status={ status } >
          <_CharacterName status={ status } >{ userName }</_CharacterName>
        </_CharacterNameWrapper>
      </_CharacterIconWrapper>
      <_ScoreWrapper status={ status } >
        <_ScoreHead status={ status }>
          <h1>Score</h1>
        </_ScoreHead>
        <_Score>
          { status === 'HOST'
            ? scoresQuery.data[ SCORES_KEY ][0]
            : scoresQuery.data[ SCORES_KEY ][1]
          }
          <span>pt</span>
        </_Score>
      </_ScoreWrapper>
    </_CharacterScoreBoardWrapper>
  );
};