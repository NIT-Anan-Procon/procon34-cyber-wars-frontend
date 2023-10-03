import styled from 'styled-components';
import { colors } from '@/assets/styles';

const _GoalListWrapper= styled.div`
  height     : 15rem;
  width      : 100%;
  position   : relative;
  display    : flex;
  align-items: center;
  justify-content: center;

  &::before {
    content : '';
    position: absolute;
    height  : 100%;
    width   : 100%;
    background: ${ colors.bgLighter };
    clip-path : polygon(5% 8%, 93% 14%, 95% 88%, 10% 90%);
    z-index: 2;
  };
`;

const _GoalListHead= styled.div`
  height         : 6rem;
  width          : 20rem;
  position       : absolute;
  top            : -20px;
  left           : 0px;
  display        : flex;
  align-items    : center;
  justify-content: center;

  &::before {
    content: '';
    width : 100%;
    height: 100%;
    position: absolute;
    background: ${ colors.bgLighter };
    clip-path : polygon(5% 8%, 93% 14%, 95% 88%, 10% 90%);
    z-index: 2;
  };

  > h1 {
    font-size: 2.5rem;
    color    : ${ colors.bgDarker };
    z-index  : 10;
  }
`;

const _GoalContainer= styled.div`
  height: 100%;
  width : 100%;
  display: flex;
  justify-content: center;
`;

type GoalListWrapperProps= {
  children: React.ReactNode;
};

export const GoalListWrapper= ({ children }: GoalListWrapperProps ) => {
  return (
    <_GoalListWrapper>
      <_GoalListHead><h1>{'GOAL'}</h1></_GoalListHead>
      <_GoalContainer>{ children }</_GoalContainer>
    </_GoalListWrapper>
  );
};