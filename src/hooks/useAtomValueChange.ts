import { useCallback } from 'react';
import { RecoilState, useRecoilState } from 'recoil';

export const useAtomValueChange= ( atom: RecoilState<string> ): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [ value, setValue ]= useRecoilState<string>(atom);

  const updateValue= useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return [ value, updateValue ];
};