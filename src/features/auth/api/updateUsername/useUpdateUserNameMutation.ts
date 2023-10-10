import { useMutation } from '@tanstack/react-query';

import { updateUsernameFn } from '.';

export const useUpdateUsernameMutation= () => {
  return useMutation({
    mutationFn: updateUsernameFn
  });
};