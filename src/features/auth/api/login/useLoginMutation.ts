import { useMutation } from '@tanstack/react-query';

import { loginFn } from './loginFn';
import { queryClient } from '@/lib/react-query';
import { AuthResponseType, AuthenticatedUserQueryKey } from '..';
import { useNavigate } from 'react-router';

export const useLoginMutation= () => {
  const navigate= useNavigate();

  return useMutation({
    onSuccess: ( authUser: AuthResponseType ) => {
      const prevIsAuthenticated= queryClient.getQueryData( AuthenticatedUserQueryKey );
      
      if( prevIsAuthenticated && authUser.success ) {
        queryClient.setQueryData( AuthenticatedUserQueryKey, {
          ...prevIsAuthenticated,
          loggedIn: authUser.success,
        });
      }

      if( authUser.success ) {
        navigate( '../../' )
      } else {
        alert('ログインに失敗しました。')
      }
    },
    mutationFn: loginFn
  });
};