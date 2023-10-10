import { useMutation } from '@tanstack/react-query';
import { sendFlagFn } from '.';
import { SendFlagResponseType } from '..';
import { useSetRecoilState } from 'recoil';
import { addScoreState } from '@/features/games/scores/states/atoms/addScoreState';
import { isCorrectState } from '@/features/games/scores/states/atoms';

export const useSendFlagMutation= () => {
  const setIsCorrect= useSetRecoilState( isCorrectState );
  const setAddScore= useSetRecoilState( addScoreState );

  return useMutation({
    onSuccess: ( data: SendFlagResponseType ) => {
      if( data?.valid && data?.correct ) {
        setIsCorrect( true );
        setAddScore( data?.score );
      } else {
        setIsCorrect( false );
      };
    },
    mutationFn: sendFlagFn
  });
};