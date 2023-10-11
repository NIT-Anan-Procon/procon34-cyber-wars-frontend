import { useSetRecoilState } from 'recoil';
import { useMutation }       from '@tanstack/react-query';

import { createRoomFn }   from './createRoomFn';
import { inviteIdState }  from '../../states/atoms';
import { CreateRoomResponseType } from '..';
import { useNavigate } from 'react-router';

export const useCreateRoomMutation= () => {
  const navigate= useNavigate();
  const setInviteId= useSetRecoilState( inviteIdState );
  
  return useMutation({
    onSuccess: ( data: CreateRoomResponseType ) => {
      setInviteId( data?.inviteId );
      navigate('games/standby');
    },
    onError: () => {
      
    },
    mutationFn: createRoomFn
  });
};