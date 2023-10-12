import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { deleteGameFn } from '.';
import { REMATCH_SUCCESSFUL } from '../types';
import { queryClient } from '@/lib/react-query';

export const useDeleteGameMutation= () => {
  const navigate= useNavigate();

  return useMutation({
    onSuccess: ( data: REMATCH_SUCCESSFUL ) => {
      if( data.success ) {
        queryClient.clear()
        navigate('../standby');
      } else {
        alert('課題が存在しません');
      };
    },
    mutationFn: deleteGameFn
  });
};