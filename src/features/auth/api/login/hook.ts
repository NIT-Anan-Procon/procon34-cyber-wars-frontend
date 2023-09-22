import { useMutation } from '@tanstack/react-query';

import { MutationConfig } from '@/lib/react-query';
import { loginFn } from '.';

type UseLoginMutationOptions= {
  config?: MutationConfig<typeof loginFn>
};

export const useLoginMutation= ({ config }: UseLoginMutationOptions) => {
  return useMutation({
    mutationFn: loginFn
  });
};