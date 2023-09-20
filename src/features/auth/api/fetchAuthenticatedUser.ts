import { useQuery } from '@tanstack/react-query';

import { IS_SIGNEDIN_URL } from '@/config/apiUrls';
import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';
import { useSetRecoilState } from 'recoil';
import { authenticatedUserState } from '@/atoms';

export const fetchAuthenticatedUser= () => {
  const setAuthUser= useSetRecoilState( authenticatedUserState );

  async function authUser() {
    return await axios.get( IS_SIGNEDIN_URL )
    .then(( res ) => {
      setAuthUser( res );
    })
  };

  return { authUser };
};

// type QueryFn= typeof fetchAuthenticatedUser;

// type UseAuthUserQueryOptions= {
//   config?: QueryConfig<QueryFn>;
// };

// export const useAuthUserQuery= ({ config }) => {
//   return useQuery({
//     queryKey: [ 'query_authenticatedUser' ],
//     queryFn : () => fetchAuthenticatedUser(),
//     ...config
//   });
// };