import styled from 'styled-components';
import { colors } from '@/assets/styles';

const _GoalListWrapper= styled.div`
  height     : 100%;
  width      : 100%;
  position   : relative;
  display    : flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const _GoalListHead= styled.div`
  height         : 6rem;
  width          : 20rem;
  position       : relative;
  display        : flex;
  align-items    : center;
  justify-content: center;

  &::before {
    content   : '';
    width     : 100%;
    height    : 100%;
    position  : absolute;
    background: ${ colors.bgLighter };
    clip-path : polygon(5% 8%, 93% 14%, 95% 88%, 10% 90%);
    z-index   : 2;
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
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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