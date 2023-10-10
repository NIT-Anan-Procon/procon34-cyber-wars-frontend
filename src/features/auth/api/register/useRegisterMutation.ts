import { useMutation } from '@tanstack/react-query';

import { registerFn } from './registerFn';
import { queryClient } from '@/lib/react-query';
import { AuthResponseType, AuthenticatedUserQueryKey, IS_LOGGED_IN_KEY } from '..';

export const useRegisterMutation= () => {
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
    mutationFn: registerFn
  });
};