import { useMutation } from '@tanstack/react-query';

import { loginFn } from './loginFn';
import { queryClient } from '@/lib/react-query';
import { AuthResponseType, AuthenticatedUserQueryKey, IS_LOGGED_IN_KEY } from '..';

export const useLoginMutation= () => {
  return useMutation({
    onSuccess: ( isSuccess: AuthResponseType ) => {
      const prevIsAuthenticated= queryClient.getQueryData( AuthenticatedUserQueryKey );
      
      if( prevIsAuthenticated && isSuccess ) {
        queryClient.setQueryData( AuthenticatedUserQueryKey, {
          ...prevIsAuthenticated,
          [ IS_LOGGED_IN_KEY ]: isSuccess,
        });
      }
    },
    mutationFn: loginFn
  });
};