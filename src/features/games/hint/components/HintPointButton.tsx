import styled from 'styled-components';

import { CHALLENGE_HINT_SCORE_KEY, ChallengeQueryKey, fetchChallengeFn } from '@/features/games/challenge';
import { useShowHintMutation } from '..';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@/components/Elements';
import { colors } from '@/assets/styles';
import { useQuery } from '@tanstack/react-query';

const $HintButton= styled(Button)`
  width: 100%;
  background: ${ colors.danger };
`;

const HintButtonIconStyle= {
  fontSize: '2rem'
};

export const HintPointButton= () => {
  const showHintMutation= useShowHintMutation();
  const { data: hintScore }= useQuery( ChallengeQueryKey, fetchChallengeFn,
    {
      select: ( data ) => data[ CHALLENGE_HINT_SCORE_KEY ], 
    }
  );
  
  return (
    <$HintButton
      type     = 'button'
      startIcon= { <LockIcon style={ HintButtonIconStyle } /> }
      onClick  = { async() => await showHintMutation.mutateAsync() }
    > 
    { hintScore }pt
    </$HintButton>
  );
};