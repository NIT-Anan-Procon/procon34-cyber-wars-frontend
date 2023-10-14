import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { deleteGameFn } from '.';
import { queryClient } from '@/lib/react-query';
import { useSetRecoilState } from 'recoil';
import { isShowHintState } from '@/features/games/hint';
import { useExitRoomMutation } from '@/features/games/room';

export const useDeleteGameMutation= () => {
  const navigate= useNavigate();
  const setIsHint= useSetRecoilState( isShowHintState );
  const exitRoomMutation= useExitRoomMutation();

  return useMutation({
    onMutate: async( isRematch: boolean ) => {
      if( isRematch ) {
        queryClient.clear()
        setIsHint( false )
        navigate('../standby');
      } else {
        await exitRoomMutation.mutateAsync()
      };
    },
    mutationFn: deleteGameFn
  });
};