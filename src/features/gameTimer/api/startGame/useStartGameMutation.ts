import { useMutation } from '@tanstack/react-query';

import { startGameFn } from './startGameFn';

export const useStartGameMutation= () => {
  return useMutation({
    mutationFn: startGameFn
  });
};