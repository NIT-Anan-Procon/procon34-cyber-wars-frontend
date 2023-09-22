import { useQuery } from '@tanstack/react-query';

import { fetchAuthenticatedUserFn }     from './fetchAuthenticatedUserFn';
import { AuthenticatedUserQueryKey } from './fetchAuthenticatedUserQueryKey';

export const useAuthenticatedUserQuery= () => {
  return useQuery({
    queryKey: AuthenticatedUserQueryKey,
    queryFn : fetchAuthenticatedUserFn
  });
};