import { focusedElementIdState, previewRefState } from "@/atoms";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const useFocusedElementId= () => {
  const iframeRef= useRecoilValue( previewRefState );
  const [ focusedId, setFocusedId ]= useRecoilState( focusedElementIdState );

  useEffect(() => {
    const handleFocus = (e) => {
      const id = e.target.id;
      setFocusedId(id);
      console.log(id);
    };

    const input = iframeRef?.current?.contentDocument.querySelector('input');
    input.addEventListener("focus", handleFocus);

  }, [ iframeRef, focusedId ]);

  return focusedId;
};