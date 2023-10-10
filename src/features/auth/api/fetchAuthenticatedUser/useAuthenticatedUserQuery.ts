import { useQuery } from '@tanstack/react-query';

import { QueryConfig } from '@/lib/react-query';
import { fetchAuthenticatedUserFn }  from './fetchAuthenticatedUserFn';
import { AuthenticatedUserQueryKey } from './fetchAuthenticatedUserQueryKey';

type UserAuthenticatedUserQueryOptions={
  config?: QueryConfig<typeof fetchAuthenticatedUserFn>
};

export const useAuthenticatedUserQuery= ({ config }: UserAuthenticatedUserQueryOptions ) => {
  return useQuery({
    queryKey: AuthenticatedUserQueryKey,
    queryFn : fetchAuthenticatedUserFn,
    ...config
  });
};