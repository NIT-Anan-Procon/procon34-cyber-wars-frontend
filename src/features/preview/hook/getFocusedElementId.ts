import { focusedElementIdState, previewRefState } from "@/atoms";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const useFocusedElementId= () => {
  const iframeRef= useRecoilValue( previewRefState );
  const [ focusedId, setFocusedId ]= useRecoilState( focusedElementIdState );

  useEffect(() => {

    const iframeDoc = iframeRef?.current?.contentDocument;
    const handleFocus = (e) => {

      const id = e.target.id;

      setFocusedId(id);
    };

    if (iframeDoc) {

      const inputs = iframeDoc.querySelectorAll("input");

      inputs.forEach((input) => {
        input.addEventListener("focus", handleFocus);
      });
    }

    return () => {

      if (iframeDoc) {

        const inputs = iframeDoc.querySelectorAll("input");

        inputs.forEach((input) => {
          input.removeEventListener("focus", handleFocus);
        });
      }
    };
  }, [iframeRef]);

  return focusedId;
};