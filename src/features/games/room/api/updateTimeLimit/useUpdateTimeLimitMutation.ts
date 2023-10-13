import { useMutation } from '@tanstack/react-query';

import { updateTimeLimitFn } from './updateTimeLimitFn';

export const useUpdateTimeLimitMutation= () => {
  return useMutation({
    mutationFn: updateTimeLimitFn
  });
};