import { useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';

import { showHintFn } from './showHintFn';
import { isShowHintState } from '../..';
import { scoreHistoryState } from '@/features/games/scores/states/atoms';
import { queryClient } from '@/lib/react-query';
import { ChallengeQueryKey } from '@/features/games/challenge';

export const useShowHintMutation= () => {
  const setIsShowHint= useSetRecoilState( isShowHintState );
  const setScoreHistory= useSetRecoilState( scoreHistoryState );

  return useMutation({
    onSuccess: () => {
      const data= queryClient.getQueryData( ChallengeQueryKey );
      setIsShowHint( true );
      setScoreHistory(
        {
          score : 20, 
          status: 'successful'
        }
      );
    },
    mutationFn: showHintFn
  });
};