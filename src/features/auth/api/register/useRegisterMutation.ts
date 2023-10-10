import { useMutation } from '@tanstack/react-query';

import { registerFn } from './registerFn';
import { queryClient } from '@/lib/react-query';
import { AuthResponseType, AuthenticatedUserQueryKey } from '..';

export const useRegisterMutation= () => {
  return useMutation({
    onSuccess: ( isSuccess: AuthResponseType ) => {
      const prevIsAuthenticated= queryClient.getQueryData( AuthenticatedUserQueryKey );
      
      if( prevIsAuthenticated && isSuccess ) {
        queryClient.setQueryData( AuthenticatedUserQueryKey, {
          ...prevIsAuthenticated,
          loggedIn: isSuccess,
        });
      }
    },
    mutationFn: registerFn
  });
};