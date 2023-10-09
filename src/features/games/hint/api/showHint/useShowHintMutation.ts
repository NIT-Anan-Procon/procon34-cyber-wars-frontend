import { useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';

import { showHintFn } from './showHintFn';
import { isShowHintState } from '../..';

export const useShowHintMutation= () => {
  const setIsShowHint= useSetRecoilState( isShowHintState );

  return useMutation({
    onSuccess: () => {
      setIsShowHint( true );
    },
    mutationFn: showHintFn
  });
};