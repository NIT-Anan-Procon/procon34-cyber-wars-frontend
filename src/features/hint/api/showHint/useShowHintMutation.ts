import { useMutation } from '@tanstack/react-query';

import { showHintFn } from './showHintFn';

export const useShowHintMutation= () => {
  return useMutation({
    mutationFn: showHintFn
  });
};