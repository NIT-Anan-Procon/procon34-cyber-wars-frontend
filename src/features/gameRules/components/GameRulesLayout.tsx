import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _GameRulesWrapper= styled.div`
  height     : 50rem;
  width      : 100%;
  min-width  : 60rem;
  padding    : 5% 5%;
  position   : relative; 
  display    : flex;
  flex-direction: column;
  align-items   : center;
  
  &::before {
    content : '';
    position: absolute;
    top     : 0px;
    height  : 100%;
    width   : 100%;
    background: ${ colors.bgLighter };
    clip-path: polygon(0 0, 100% 3%, 100% 96%, 1% 100%);
    z-index: 1;
  };

  &::after {
    content : '';
    position: absolute;
    top     : 0px;
    height  : 100%;
    width   : 100%;
    background: black;
    clip-path: polygon(2% 7%, 98% 5%, 95% 95%, 5% 97%);
    z-index: 1;
  };
`;

const _RulesHead= styled.div`
  height         : 8rem;
  width          : 40rem;
  position       : absolute;
  top            : -20px;
  display        : flex;
  align-items    : center;
  justify-content: center;

  &::before,
  &::after
  {
    content: '';
    width : 100%;
    height: 100%;
    position: absolute;
  };

  &::before {
    background: ${ colors.bgLighter };
    clip-path : polygon(5% 8%, 93% 14%, 95% 88%, 10% 90%);
    z-index: 2;
  };

  &::after{
    background: black;
    clip-path: polygon(3% 5%, 100% 0%, 97% 100%, 6% 95%);
    z-index  : 1;
  }

  > h1 {
    font-size: 3rem;
    color    : ${ colors.bgDarker };
    z-index  : 10;
  }
`;

type GameRulesLayoutProps= {
  children: React.ReactNode;
};

export const GameRulesLayout= (
  { 
    children 
  }: GameRulesLayoutProps
) => {
  return (
    <_GameRulesWrapper>
      <_RulesHead><h1>GAME RULES</h1></_RulesHead>
      { children }
    </_GameRulesWrapper>
  );
};