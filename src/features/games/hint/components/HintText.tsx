import styled from 'styled-components';

import { Loading } from '@/components/Animation';
import { colors }  from '@/assets/styles';
import {
  ChallengeQueryKey,
  fetchChallengeFn
} from '@/features/games/challenge';
import { useQuery } from '@tanstack/react-query';

const _HintText= styled.p`
  line-height: 2.2rem;
  font-size  : 1.6rem;
  color      : ${ colors.bgLighter };
`;

export const HintText= () => {
  const challengeQuery= useQuery(ChallengeQueryKey, fetchChallengeFn);

  if( challengeQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data ) return null;

  return ( <_HintText>{ challengeQuery?.data.hint }</_HintText> );
};