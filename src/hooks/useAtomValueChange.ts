import { useCallback } from "react";
import { RecoilState, useRecoilState } from "recoil";

export const useAtomValueChange= ( atom: RecoilState<string> ): [
  string,
  ( value: string ) => void
] => {
  const [ value, setValue ]= useRecoilState<string>(atom);

  const updateValue= useCallback(
    (value: string) => {
      setValue(value);
    },
    [setValue]
  );

  return [ value, updateValue ];
};