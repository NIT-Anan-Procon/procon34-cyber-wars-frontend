import { useMutation } from '@tanstack/react-query';

import { startGameFn } from './patchStartGameFn';

export const useStartGameMutation= () => {
  return useMutation({
    mutationFn: startGameFn
  });
};