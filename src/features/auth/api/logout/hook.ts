import { useMutation } from '@tanstack/react-query';

import { logoutFn } from '.';

export const useLogoutMutation= () => {
  return useMutation({
    mutationFn: logoutFn
  });
};