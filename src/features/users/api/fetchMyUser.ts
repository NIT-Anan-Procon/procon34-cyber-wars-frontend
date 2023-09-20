import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';
import { IS_SIGNEDIN_URL } from '@/config/apiUrls';

export const fetchMyUser= async() => {
  return await axios.get( IS_SIGNEDIN_URL );
};

type QueryFn= typeof fetchMyUser;

type UseMyUserQueryOptions= {
  config?: QueryConfig<QueryFn>;
};

export const useMyUserQuery= ({ config }: UseMyUserQueryOptions ) => {
  return useQuery({
    queryKey: [ 'query_myUser' ],
    queryFn : () => fetchMyUser(),
    ...config
  });
};