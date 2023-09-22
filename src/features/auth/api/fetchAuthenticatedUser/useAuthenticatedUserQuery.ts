import { useQuery } from '@tanstack/react-query';

import { fetchAuthenticatedUserFn }     from './fetchAuthenticatedUserFn';
import { AUTHENTICATED_USER_QUERY_KEY } from './fetchAuthenticatedUserQueryKey';

export const useAuthenticatedUserQuery= () => {
  return useQuery({
    queryKey: [ AUTHENTICATED_USER_QUERY_KEY ],
    queryFn : fetchAuthenticatedUserFn
  });
};