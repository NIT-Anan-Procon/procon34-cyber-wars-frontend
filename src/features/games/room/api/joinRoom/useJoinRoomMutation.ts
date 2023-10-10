import { useMutation } from '@tanstack/react-query';

import { joinRoomFn } from '.';

export const useJoinRoomMutation= () => {
  return useMutation({
    mutationFn: joinRoomFn
  });
};