import styled from 'styled-components';
import { CHALLENGE_GOAL_KEY, useFetchChallengeQuery } from '@/features/challenge';
import { Loading } from '@/components/Animation';

const _GoalList= styled.ul`
  height  : 100%;
  width   : 100%;
  padding-top: 20%;
  position: relative;
  display : flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  z-index: 100;
`;

const _GoalListItem= styled.li`
    font-size: 1.4rem;
    font-weight: bolder;
`;

export const GoalList= () => {
  const challengeQuery= useFetchChallengeQuery({});
  
  if( challengeQuery.isLoading ){
    return (
      <Loading />
    )
  }

  if( !challengeQuery?.data ) return null;

  return (
    <_GoalList>

          <_GoalListItem  >
            <span>{ challengeQuery?.data[ CHALLENGE_GOAL_KEY ] }</span>
          </_GoalListItem>

    </_GoalList>
  );
};