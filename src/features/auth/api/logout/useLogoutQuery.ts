import { useMutation } from '@tanstack/react-query';

import { logoutFn } from './logoutFn';

export const useLogoutMutation= () => {
  return useMutation({
    mutationFn: logoutFn
  });
};