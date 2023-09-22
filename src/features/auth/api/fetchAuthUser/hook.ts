import { useQuery } from '@tanstack/react-query';

import { AUTHENTICATED_USER_QUERY_KEY, fetchAuthenticatedUserFn } from '.';

export const useAuthenticatedUserQuery= () => {
  return useQuery({
    queryKey: [ AUTHENTICATED_USER_QUERY_KEY ],
    queryFn : fetchAuthenticatedUserFn
  });
};