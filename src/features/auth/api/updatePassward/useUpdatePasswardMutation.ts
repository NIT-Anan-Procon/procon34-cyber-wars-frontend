import { useMutation } from '@tanstack/react-query';

import { updatePasswordFn } from './updatePasswardFn';

export const useUpdatePassword= () => {
  return useMutation({
    mutationFn: updatePasswordFn
  });
};