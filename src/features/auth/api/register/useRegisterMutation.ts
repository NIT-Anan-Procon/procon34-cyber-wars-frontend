import { useMutation } from '@tanstack/react-query';

import { registerFn } from './registerFn';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { AuthResponseType, AuthenticatedUserQueryKey, IS_LOGGED_IN_KEY } from '..';

type UseRegisterMutationOptions= {
  config?: MutationConfig<typeof registerFn>;
};

export const useRegisterMutation= ({ config }: UseRegisterMutationOptions ) => {
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
      alert('ユーザ登録に失敗しました')
    },
    ...config,
    mutationFn: registerFn
  });
};