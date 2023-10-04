import styled from 'styled-components';

import { VULNERABILITIES_KEY, useFetchChallengeQuery } from '@/features/challenge';
import { HintDrawerButton } from '.';
import { Loading } from '@/components/Animation';

const _HintButtonList= styled.ul`
  margin : 20px;
  height : 100%;
  width  : 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  list-style: none;
`;

const _HintButtonListItem= styled.li`
  height: 5rem;
  width : 5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const HintButtonList= () => {
  const { data: vulnerabilities, isLoading }= useFetchChallengeQuery({});

  if( isLoading ) {
    return <Loading />
  };
  return (
    <_HintButtonList>
      { 
        vulnerabilities?.[ VULNERABILITIES_KEY ].map(( item, index: number ) => (
          <_HintButtonListItem key={ index } >
            <HintDisplayDrawer id={ index } />
          </_HintButtonListItem>
        ))
      }
    </_HintButtonList>
  );
};