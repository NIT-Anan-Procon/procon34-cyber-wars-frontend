import { useMutation } from '@tanstack/react-query';

import { createRoomFn } from './createRoomFn';

export const useCreateRoomMutation= () => {
  return useMutation({
    mutationFn: createRoomFn
  });
};