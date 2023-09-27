import styled from 'styled-components';
import { Lock } from '@mui/icons-material';

import { Button } from '@/components/Elements';
import { VULNERABILITIES_KEY, useFetchChallengeQuery } from '@/features/challenge';

const _HintButtonList= styled.ul`
  height : 100%;
  width  : 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
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
    return <>loading</>
  };
  return (
    <_HintButtonList>
      { 
        vulnerabilities?.[ VULNERABILITIES_KEY ].map(( item, index ) => (
          <_HintButtonListItem key={ index } >
            <Button><Lock/></Button>
          </_HintButtonListItem>
        ))
      }
    </_HintButtonList>
  );
};