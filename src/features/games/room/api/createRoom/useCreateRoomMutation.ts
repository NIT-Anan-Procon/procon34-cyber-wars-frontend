import { useSetRecoilState } from 'recoil';
import { useMutation }       from '@tanstack/react-query';

import { createRoomFn }   from './createRoomFn';
import { inviteIdState }  from '../../states/atoms';
import { CreateRoomResponseType, INVITE_ID_KEY } from '..';

export const useCreateRoomMutation= () => {
  const setInviteId= useSetRecoilState( inviteIdState );
  
  return useMutation({
    onSuccess: ( data: CreateRoomResponseType ) => {
      setInviteId( data[ INVITE_ID_KEY ] );
    },
    onError: () => {

    },
    mutationFn: createRoomFn
  });
};