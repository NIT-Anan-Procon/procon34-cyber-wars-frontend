import { useMutation } from '@tanstack/react-query';

import { deleteGameFn } from '.';
import { useSetRecoilState } from 'recoil';
import { isShowHintState } from '@/features/games/hint';
import { queryClient } from '@/lib/react-query';

export const useDeleteGameMutation= () => {
  const setIsHint= useSetRecoilState( isShowHintState );

  return useMutation({
    onSuccess: () => {
      queryClient.clear()
      setIsHint( false )
    },
    mutationFn: deleteGameFn
  });
};