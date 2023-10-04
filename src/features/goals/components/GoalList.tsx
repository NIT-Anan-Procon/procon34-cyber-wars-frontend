import styled from 'styled-components';
import { VULNERABILITIES_KEY, useFetchChallengeQuery } from '@/features/challenge';
import { Loading } from '@/components/Animation';

const _GoalList= styled.ul`
  height  : 100%;
  width   : 100%;
  position: relative;
  display : flex;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  z-index: 100;
`;

const _GoalListItem= styled.li`
  line-height: 2.4rem;
  width: 100%;
  > span {
    font-size: 1.6rem;
    font-weight: bolder;
  }
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
      { vulnerabilities?.map(( props, index ) => (
          <_GoalListItem key={ index } >
            <span>{ props.goal }</span>
          </_GoalListItem>
        ))
      }
    </_GoalList>
  );
};