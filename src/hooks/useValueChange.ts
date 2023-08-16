import { useCallback, useState } from "react";

export const useValueChange= (initialValue: string): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [ value, setValue ]= useState<string>(initialValue);

  const updateValue= useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return [ value, updateValue ];
};