import styled from 'styled-components';

import { Loading } from '@/components/Animation';
import { colors }  from '@/assets/styles';
import { 
  CHALLENGE_HINT_KEY,
  useFetchChallengeQuery
} from '@/features/challenge';

const _HintContent= styled.div`
  height         : 100%;
  width          : 100%;
  display        : flex;
  align-items    : center;
  justify-content: center;
`;

const _HintText= styled.p`
  line-height: 2.2rem;
  font-size  : 1.6rem;
  color      : ${ colors.bgLighter };
`;

export const HintText= () => {
  const challengeQuery= useFetchChallengeQuery({});

  if( challengeQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data ) return null;

  return ( <_HintText>{ challengeQuery?.data[ CHALLENGE_HINT_KEY ] }</_HintText> );
};