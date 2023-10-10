import { useMutation } from '@tanstack/react-query';

import { sendCodeFn } from '.';

export const useSendCodeMutation= () => {
  return useMutation({
    mutationFn: sendCodeFn
  });
};