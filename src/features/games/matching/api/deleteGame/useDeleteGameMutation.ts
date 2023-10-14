import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { deleteGameFn } from '.';
import { queryClient } from '@/lib/react-query';
import { useSetRecoilState } from 'recoil';
import { isShowHintState } from '@/features/games/hint';
import { useExitRoomMutation } from '@/features/games/room';
import { REMATCH_SUCCESSFUL } from '../types';

export const useDeleteGameMutation= () => {
  const navigate= useNavigate();
  const setIsHint= useSetRecoilState( isShowHintState );
  const exitRoomMutation= useExitRoomMutation();

  return useMutation({
    onMutate: async( isRematch: boolean ) => {
      if( !isRematch ) {
        await exitRoomMutation.mutateAsync()
      };
    },
    onSuccess: ( data: REMATCH_SUCCESSFUL ) => {
      if( data.success ) {
        queryClient.clear()
        setIsHint( false )
        navigate('../standby');
      } else {
        alert('課題が存在しません。');
      }      
    },
    mutationFn: deleteGameFn
  });
};