import { useQuery } from '@tanstack/react-query';

import { QueryConfig } from '@/lib/react-query';
import { fetchAuthenticatedUserFn }  from './fetchAuthenticatedUserFn';
import { AuthenticatedUserQueryKey } from './fetchAuthenticatedUserQueryKey';

type UserAuthenticatedUserQueryOtptions={
  config?: QueryConfig<typeof fetchAuthenticatedUserFn>
};

export const useAuthenticatedUserQuery= ({ config }: UserAuthenticatedUserQueryOtptions) => {
  return useQuery({
    queryKey: AuthenticatedUserQueryKey,
    queryFn : fetchAuthenticatedUserFn,
    ...config
  });
};