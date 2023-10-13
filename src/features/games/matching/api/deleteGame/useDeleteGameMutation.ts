import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { deleteGameFn } from '.';
import { REMATCH_SUCCESSFUL } from '../types';
import { queryClient } from '@/lib/react-query';
import { useSetRecoilState } from 'recoil';
import { isShowHintState } from '@/features/games/hint';
import { useExitRoomMutation } from '@/features/games/room';

export const useDeleteGameMutation= () => {
  const navigate= useNavigate();
  const setIsHint= useSetRecoilState( isShowHintState );
  const exitRoomMutation= useExitRoomMutation();

  return useMutation({
    onSuccess: ( data: REMATCH_SUCCESSFUL ) => {
      if( data.success ) {
        queryClient.clear()
        setIsHint( false )
        navigate('../standby');
      } else {
        alert('課題が存在しません');
      };
    },
    mutationFn: deleteGameFn
  });
};