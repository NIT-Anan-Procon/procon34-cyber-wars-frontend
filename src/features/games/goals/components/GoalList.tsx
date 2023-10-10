import styled from 'styled-components';
import { ChallengeQueryKey, fetchChallengeFn } from '@/features/games/challenge';
import { Loading } from '@/components/Animation';
import { useQuery } from '@tanstack/react-query';

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
  const challengeQuery= useQuery( ChallengeQueryKey, fetchChallengeFn );
  
  if( challengeQuery.isLoading ){
    return (
      <Loading />
    )
  }

  if( !challengeQuery?.data ) return null;

  return (
    <_GoalList>
      <_GoalListItem  >
        <span>{ challengeQuery?.data?.goal }</span>
      </_GoalListItem>
    </_GoalList>
  );
};