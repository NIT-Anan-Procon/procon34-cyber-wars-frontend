import styled from 'styled-components';
import { GoalList, GoalListWrapper } from '.';

const _GoalDrawerContent= styled.div`
  height : 100%;
  width  : 100%;
  padding: 20px;
`;

export const GoalDrawerContent= () => {
  return (
    <_GoalDrawerContent>
      <GoalListWrapper >
        <GoalList />
      </GoalListWrapper>
    </_GoalDrawerContent>
  );
};