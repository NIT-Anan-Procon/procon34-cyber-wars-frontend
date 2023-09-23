import { useMutation } from '@tanstack/react-query';

import { exitRoomFn } from './exitRoomFn';

export const useExitRoomMutation= () => {
  return useMutation({
    mutationFn: exitRoomFn
  });
};