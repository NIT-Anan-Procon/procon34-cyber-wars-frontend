import { useMutation } from '@tanstack/react-query';

import { updateUserNameFn } from './mutationFn';

export const useUpdateUserNameMutation= () => {
  return useMutation({
    mutationFn: updateUserNameFn
  });
};