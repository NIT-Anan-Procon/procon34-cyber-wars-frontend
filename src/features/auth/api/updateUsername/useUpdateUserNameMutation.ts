import { useMutation } from '@tanstack/react-query';

import { updateUsernameFn } from './updateUsernameFn';

export const useUpdateUsernameMutation= () => {
  return useMutation({
    mutationFn: updateUsernameFn
  });
};