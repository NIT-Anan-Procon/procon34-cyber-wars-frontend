import { useMutation } from '@tanstack/react-query';
import { sendFlagFn } from '.';
import { GAME_SCORE_KEY, IS_CORRECT_KEY, IS_VALID_KEY } from '..';
import { useSetRecoilState } from 'recoil';
import { addScoreState } from '@/features/games/scores/states/atoms/addScoreState';
import { isCorrectState } from '@/features/games/scores/states/atoms';

export const useSendFlagMutation= () => {
  const setIsCorrect= useSetRecoilState( isCorrectState );
  const setAddScore= useSetRecoilState( addScoreState );

  return useMutation({
    onSuccess: ( data ) => {
      if( data[ IS_VALID_KEY ] && data[ IS_CORRECT_KEY ] ) {
        setIsCorrect( true );
        setAddScore( data[ GAME_SCORE_KEY ] );
      } else {
        setIsCorrect( false );
      };
    },
    mutationFn: sendFlagFn
  });
};