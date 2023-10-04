import styled, { css } from 'styled-components';

import { SCORES_KEY, useFetchScoresQuery } from '@/features/scores';
import { colors } from '@/assets/styles';
import { Loading } from '@/components/Animation';

const _CharacterScoreBoardWrapper= styled.div<CharacterScoreBoardTransTypes>`
  height     : 100%;
  width      : 100vw;
  padding-top: 10px;
  position   : relative;
  display    : flex;
  flex-direction: column;

  &::before {
    height  : 100%;
    width   : 100%;
    content : '';
    position: absolute;
    bottom  : 0;  
  };

  ${(props) => props.status === 'HOST'
    ? css`
        align-items: start;
        &::before {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
          background: #2F1FF6;
        }
      `
    : css`
        align-items: end;
        &::before {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
          background: #CA1C1C;
        }
      `
  };
  
  ${ ( props ) => props.styles }
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

const _AddScore= styled.div<CharacterScoreBoardTransTypes>`
  height: 8rem;
  width : 15rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width : 100%;
  };
  ${(props) => props.status === 'HOST'
    ? css`
        right: 10%;
        &::before {
          background: black;
          clip-path: polygon(10% 15%, 96% 4%, 90% 88%, 44% 78%, 28% 96%, 36% 73%, 4% 71%);
          z-index: 200;
        };
        &::after {
          background: ${ colors.bgLighter };
          clip-path: polygon(6% 11%, 100% 0%, 94% 96%, 48% 82%, 24% 100%, 32% 77%, 0 75%);
          z-index: 199;
        };
      `
    : css`
        left: 10%;
        &::before {
          background: black;
          clip-path: polygon(4% 4%, 90% 15%, 96% 71%, 64% 73%, 72% 96%, 44% 78%, 10% 88%);
          z-index: 200;
        };
        &::after {
          background: ${ colors.bgLighter };
          clip-path: polygon(0% 0%, 94% 11%, 100% 75%, 68% 77%, 76% 100%, 48% 82%, 6% 92%);
          z-index: 199;
        };
      `
  };

  > span {
    font-size: 2.75rem;
    color: ${ colors.primary };
    z-index: 1000;
  };
`;

const _ScoreWrapper= styled.div<CharacterScoreBoardTransTypes>`
  height     : 50%;
  width      : 55%;
  display    : flex;
  align-items: center;
  justify-content: center;
  position   : absolute;
  bottom     : 10px;
  
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
        right: 50%;
        transform: translateX( 50% );
        &::before {
          clip-path: polygon(0 0, 100% 0, 97% 100%, 4% 89%);
        }
      `
    : css`
        left: 50%;
        transform: translateX( -50% );
        &::before {
          clip-path: polygon(0 0, 100% 0, 96% 89%, 3% 100%);
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
  const scoresQuery= useFetchScoresQuery({});

  if( scoresQuery.isLoading ) {
    return <Loading />
  };

  if( !scoresQuery.data ) return null; 

  return (
    <_CharacterScoreBoardWrapper status={ status } styles={ styles } >
      <_CharacterNameWrapper status={ status } >
        <_CharacterName status={ status } >{ userName }</_CharacterName>
      </_CharacterNameWrapper>
      <_AddScore status={ status } >
        <span>{ '+20pt' }</span>
      </_AddScore>
      <_ScoreWrapper status={ status } >
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