import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { deleteGameFn } from '.';
import { queryClient } from '@/lib/react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isShowHintState } from '@/features/games/hint';
import { useExitRoomMutation } from '@/features/games/room';
import { REMATCH_SUCCESSFUL } from '../types';
import { isRematchState } from '../../states/atom';

export const useDeleteGameMutation= () => {
  const navigate= useNavigate();
  const [ isRematchAtom, setIsRematchAtom ]= useRecoilState<boolean>( isRematchState );
  const setIsHint= useSetRecoilState( isShowHintState );
  const exitRoomMutation= useExitRoomMutation();


  return useMutation({
    onMutate: async( isRematch: boolean ) => {
      if( isRematch ) {
        setIsRematchAtom( true );
      } else {
        setIsRematchAtom( false );
      }
    },
    onSuccess: async( data: REMATCH_SUCCESSFUL ) => {
      queryClient.clear()
      if( isRematchAtom ) {
        if( data.success ) {
          setIsHint( false )
          navigate('../standby');
        } else {
          alert('課題が存在しません。');
          await exitRoomMutation.mutateAsync()
        }
      } else {
        await exitRoomMutation.mutateAsync()
      }
    },
    mutationFn: deleteGameFn
  });
};