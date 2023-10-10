import { useSetRecoilState } from 'recoil';
import { useMutation }       from '@tanstack/react-query';

import { createRoomFn }   from './createRoomFn';
import { MutationConfig } from '@/lib/react-query';
import { inviteIdState }  from '../../states/atoms';
import { CreateRoomResponseType, INVITE_ID_KEY } from '..';

type UseCreateRoomOptions= {
  config?: MutationConfig<typeof createRoomFn>;
};

export const useCreateRoomMutation= ({ config }: UseCreateRoomOptions ) => {
  const setInviteId= useSetRecoilState( inviteIdState );
  
  return useMutation({
    onSuccess: ( data: CreateRoomResponseType ) => {
      setInviteId( data[ INVITE_ID_KEY ] );
    },
    onError: () => {

    },
    ...config,
    mutationFn: createRoomFn
  });
};