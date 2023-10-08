import { useMutation } from '@tanstack/react-query';
import { sendFlagFn } from '.';

export const useSendFlagMutation= () => {
  return useMutation({
    mutationFn: sendFlagFn
  });
};