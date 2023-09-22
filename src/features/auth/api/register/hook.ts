import { useMutation } from '@tanstack/react-query';

import { registerFn } from '.';

export const useRegisterMutation= () => {
  return useMutation({
    mutationFn: registerFn
  });
};