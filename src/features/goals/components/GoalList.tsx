import styled from 'styled-components';
import { VULNERABILITIES_KEY, useFetchChallengeQuery } from '@/features/challenge';
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
  const { data: vulnerabilities, isLoading }= useFetchChallengeQuery({
    config: {
      select: (data) => data[ VULNERABILITIES_KEY ]
    }
  });
  
  if( isLoading ){
    return (
      <Loading />
    )
  }

  if( !vulnerabilities ) return null;

  return (
    <_GoalList>

          <_GoalListItem  >
            <span>{ vulnerabilities[0]?.goal }</span>
          </_GoalListItem>

    </_GoalList>
  );
};