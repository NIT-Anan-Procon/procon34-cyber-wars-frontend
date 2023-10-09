import { useMutation } from '@tanstack/react-query';

import { startGameFn } from './patchStartGameFn';

export const usePatchStartGameMutation= () => {
  return useMutation({
    mutationFn: startGameFn
  });
};