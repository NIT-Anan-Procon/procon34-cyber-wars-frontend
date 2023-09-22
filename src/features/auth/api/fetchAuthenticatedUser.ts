import { axios } from '@/lib/axios';
import { IS_LOGGED_IN_URL } from './config/endpoints';
import { useQuery } from '@tanstack/react-query';

export const fetchAuthenticatedUser= async() => {
  return await axios.get( IS_LOGGED_IN_URL );
};

export const useAuthenticatedUserQuery= () => {
  return useQuery({
    queryKey: [  ]
  });
};