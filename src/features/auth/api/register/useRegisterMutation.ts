import { useMutation } from '@tanstack/react-query';

import { registerFn } from './registerFn';
import { AuthResponseType } from '..';
import { useNavigate } from 'react-router';

export const useRegisterMutation= () => {
  const navigate= useNavigate();

  return useMutation({
    onSuccess: ( authUser: AuthResponseType ) => {
      if( authUser.success ) {
        navigate( '../login' );
      } else {
        alert('ユーザ登録に失敗しました。');
      }
    },
    mutationFn: registerFn
  });
};