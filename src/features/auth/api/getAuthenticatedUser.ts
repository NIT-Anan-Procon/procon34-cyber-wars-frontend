import { authenticatedUserState, isAuthState } from '@/atoms';
import { IS_SIGNEDIN_URL } from '@/config/apiUrls';
import { IS_SIGNEDIN, USER_NAME_KEY } from '@/config/responseKeys';
import { axios } from '@/lib/axios';
import { useSetRecoilState } from 'recoil';
import { useIsAuthenticated } from './hook/useIsAuthenticated';

export const useGetAuthenticatedUser= () => {
  const { setIsAuthenticated }= useIsAuthenticated(IS_SIGNEDIN);

  return axios.get( IS_SIGNEDIN_URL );
};