import { useMutation } from '@tanstack/react-query';

import { exitRoomFn } from './exitRoomFn';
import { useNavigate } from 'react-router';

export const useExitRoomMutation= () => {
  const navigate= useNavigate();

  return useMutation({
    onSuccess: () => {
      navigate('../../')
    },
    mutationFn: exitRoomFn
  });
};