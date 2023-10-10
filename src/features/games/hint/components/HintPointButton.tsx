import styled from 'styled-components';

import { CHALLENGE_HINT_SCORE_KEY, useFetchChallengeQuery } from '@/features/games/challenge';
import { useShowHintMutation } from '..';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@/components/Elements';
import { colors } from '@/assets/styles';

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

const $HintButton= styled(Button)`
  width: 100%;
  background: ${ colors.danger };
`;

const HintButtonIconStyle= {
  fontSize: '2rem'
};

export const HintPointButton= () => {
  const showHintMutation= useShowHintMutation();
  const { data: hintScore }= useFetchChallengeQuery({
    config: {
      select: ( data ) => data[ CHALLENGE_HINT_SCORE_KEY ], 
    }
  });
  
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