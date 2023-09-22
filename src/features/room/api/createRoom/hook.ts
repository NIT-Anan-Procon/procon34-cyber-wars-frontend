import { useMutation } from '@tanstack/react-query';

import { createRoomFn } from './mutationFn';

export const useCreateRoomMutation= () => {
  return useMutation({
    mutationFn: createRoomFn
  })
};