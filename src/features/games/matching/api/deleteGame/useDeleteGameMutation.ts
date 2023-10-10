import { useMutation } from '@tanstack/react-query';

import { deleteGameFn } from '.';
import { useSetRecoilState } from 'recoil';
import { isShowHintState } from '@/features/games/hint';

export const useDeleteGameMutation= () => {
  const setIsHint= useSetRecoilState( isShowHintState );

  return useMutation({
    onSuccess: () => {
      setIsHint( false )
    },
    mutationFn: deleteGameFn
  });
};