import { useMutation } from '@tanstack/react-query';

import { registerFn } from './registerFn';

export const useRegisterMutation= () => {
  return useMutation({
    mutationFn: registerFn
  });
};