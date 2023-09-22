import { useMutation } from '@tanstack/react-query';

import { updatePasswordFn } from './mutationFn';

export const useUpdatePassword= () => {
  return useMutation({
    mutationFn: updatePasswordFn
  });
};