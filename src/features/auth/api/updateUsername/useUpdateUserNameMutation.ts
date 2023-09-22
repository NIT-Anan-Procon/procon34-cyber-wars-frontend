import { useMutation } from '@tanstack/react-query';

import { updateUserNameFn } from './updateUserNameFn';

export const useUpdateUserNameMutation= () => {
  return useMutation({
    mutationFn: updateUserNameFn
  });
};