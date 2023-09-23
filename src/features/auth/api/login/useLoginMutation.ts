import { useMutation } from '@tanstack/react-query';

import { loginFn } from './loginFn';
import { queryClient, MutationConfig } from '@/lib/react-query';
import { AuthResponseType, AuthenticatedUserQueryKey, IS_LOGGED_IN_KEY } from '..';

type UseLoginMutationOptions= {
  config?: MutationConfig<typeof loginFn>
};

export const useLoginMutation= ({ config }: UseLoginMutationOptions) => {
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
    onError: ( isSuccess: AuthResponseType ) => {
      alert('ログインに失敗しました')
    },
    ...config,
    mutationFn: loginFn
  });
};