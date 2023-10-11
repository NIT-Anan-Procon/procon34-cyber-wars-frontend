import { useSetRecoilState } from 'recoil';
import { useMutation }       from '@tanstack/react-query';

import { createRoomFn }   from './createRoomFn';
import { inviteIdState }  from '../../states/atoms';
import { CreateRoomResponseType, INVITE_ID_KEY } from '..';
import { useNavigate } from 'react-router';

export const useCreateRoomMutation= () => {
  const navigate= useNavigate();
  const setInviteId= useSetRecoilState( inviteIdState );
  
  return useMutation({
    onSuccess: ( data: CreateRoomResponseType ) => {
      setInviteId( data[ INVITE_ID_KEY ] );
      navigate('games/standby');
    },
    onError: () => {
      
    },
    mutationFn: createRoomFn
  });
};