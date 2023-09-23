import styled, { css } from 'styled-components';
import attackPhase from '@/assets/images/attack_phase.svg'
import { useScoresQuery } from '@/features/score';
import { OPPONENT_NAME_KEY, SCORES_KEY } from '@/constants/responseKeys';
import { fetchOpponentUser, useOpponentUserQuery } from '../api/fetchOpponentUser';
import { useRecoilValue } from 'recoil';
import { authenticatedUserState, roomMemberInfo } from '@/atoms';

const _UserBoardWrapper= styled.div<{ ishost: boolean }>`
  height     : 100%;
  width      : 40vw;
  padding-top: 10px;
  position   : relative; 
  
  ${(props) => props.ishost
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
`;

const _UserIconArea= styled.div<{ ishost: boolean }>`
  height         : 15rem;
  width          : 15rem;
  display        : flex;
  justify-content: center;
  position       : absolute;
  bottom         : 10px;
  background     : #d4d4d4;
  z-index        : 100;

  ${(props) => props.ishost
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
  }  
`;

const _UserIcon= styled.img`
  width      : 100%;
  display    : flex;
  align-items: center;
  justify-content: center;
`;

const _UserScoreWrapper= styled.div<{ ishost: boolean }>`
  height     : 10rem;
  width      : calc(100% - 10px);
  display    : flex;
  align-items: center;        
  position   : relative;
  background : black;
  
  ${(props) => props.ishost
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

const _UserScore= styled.h1`
  position : absolute;
  font-size: 5rem;
  color    : white;
  z-index  : 10;

  > span {
    margin-left: 10px;
    font-size  : 3rem;
  }
`;

const _UserNameWrapper= styled.div<{ ishost: boolean }>`
  position  : relative;
  height    : 6.5rem;
  width     : 20rem;
  display   : flex;
  align-items: center;
  justify-content: center;
  background: black;
  z-index   : 100;
  
  &::after {
    ${(props) => props.ishost
      ? css`
          clip-path: polygon(0 70%, 100% 0, 100% 100%, 0% 100%)
        `
      : css`
          clip-path: polygon(0 0, 100% 70%, 100% 100%, 0% 100%);
        `  
    }
  }
`;

const _UserName= styled.h1<{ ishost: boolean }>`
  font-size: 3.5rem;
  color    : white;
  z-index  : 999;

  ${(props) => props.ishost
      ? css`
          transform: rotate(-5deg);
        `
      : css`
          transform: rotate(5deg);
        `
    }
`;

type UserScoreBoardProps= {
  userName: string;
  ishost: boolean;
  score: number;
};

export const UserScoreBoard= (
  {
    userName,
    score,
    ishost,
  }: UserScoreBoardProps
) => {  
  return (
    <_UserBoardWrapper ishost={ ishost } >
      <_UserIconArea ishost={ ishost } >
        <_UserIcon 
          src={''}
          alt= { 'icon' }
        />
      </_UserIconArea>
      <_UserScoreWrapper ishost={ ishost } >
        <_UserScore>
          { score }
          <span>pt</span>
        </_UserScore>
      </_UserScoreWrapper>
      <_UserNameWrapper ishost={ ishost } >
        <_UserName ishost={ ishost } >{ userName }</_UserName>
      </_UserNameWrapper>
    </_UserBoardWrapper>
  );
};