import { useMutation } from '@tanstack/react-query';

import { joinRoomFn } from '.';
import { MutationConfig } from '@/lib/react-query';

type UseJoinRoomMutationOptions= {
  config?: MutationConfig<typeof joinRoomFn>
};

export const useJoinRoomMutation= ({ config }: UseJoinRoomMutationOptions ) => {
  return useMutation({
    onMutate: {
      
    },
    onSuccess: {
      
    },
    onError: {

    },
    ...config,
    mutationFn: joinRoomFn
  });
};