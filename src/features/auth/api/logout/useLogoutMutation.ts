import { useMutation } from '@tanstack/react-query';

import { logoutFn } from './logoutFn';
import { queryClient } from '@/lib/react-query';
import { AuthenticatedUserQueryKey } from '..';

export const useLogoutMutation= () => {
  return useMutation({
    onSuccess: () => {
      const prevIsAuthenticated= queryClient.getQueryData( AuthenticatedUserQueryKey );
      
      if( prevIsAuthenticated ) {
        queryClient.setQueryData( AuthenticatedUserQueryKey, {
          ...prevIsAuthenticated,
          loggedIn: false,
        });
      }

      alert('ログアウトしました。');
    },
    mutationFn: logoutFn
  });
};