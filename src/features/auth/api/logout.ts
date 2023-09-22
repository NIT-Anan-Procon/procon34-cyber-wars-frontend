import { useMutation } from '@tanstack/react-query';

import { axios }      from '@/lib/axios';
import { MutationConfig } from '@/lib/react-query';
import { LOGOUT_URL } from './config/endpoints';

export const logoutFn= async() => {
  return await axios.post( LOGOUT_URL );
};

type UseLogoutMutationOptions= {
  config?: MutationConfig<typeof logoutFn>
};