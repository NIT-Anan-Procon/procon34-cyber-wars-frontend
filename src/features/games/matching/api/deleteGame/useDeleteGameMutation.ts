import { useMutation } from '@tanstack/react-query';

import { deleteGameFn } from '.';

export const useDeleteGameMutation= () => {
  return useMutation({
    mutationFn: deleteGameFn
  });
};