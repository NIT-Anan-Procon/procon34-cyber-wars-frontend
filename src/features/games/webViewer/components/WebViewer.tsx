import { useRef, useEffect } from 'react';
import {  useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { focusedInputElementState, targetInputNameState } from '../states/atoms';

const _Preview= styled.iframe`
  width      : calc( 100% - 40px);
  height     : calc( 100% - 40px);
  z-index    : 9999;
  border     : none;
  outline    : none;
  position   : relative;
  display    : flex;
  align-items: center;
  justify-content: center;
  background : transparent;
  z-index    : 2;
`;

type PreviewProps= {
  targetPath: string;
};

export const WebViewer= ({ targetPath }: PreviewProps ) => {
  const iframeRef= useRef<HTMLIFrameElement | null>(null);
  const setFocusedInputElement= useSetRecoilState( focusedInputElementState );
  const setTargetInputName= useSetRecoilState( targetInputNameState );

  useEffect(() => {
    function getInputsFromIframe() {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
      const inputElements = iframeDocument?.querySelectorAll('input');
      const inputsArray = Array.from(inputElements || []);

      for (let input of inputsArray) {
        input?.addEventListener('focus', () => {
          setFocusedInputElement(input);
          setTargetInputName(input?.name || '');
        });
      }
    }
    iframeRef.current?.addEventListener('load', getInputsFromIframe);

  }, [iframeRef, setFocusedInputElement, setTargetInputName]);

  return (
    <_Preview
      ref= { iframeRef }
      src= { targetPath }
    /> 
  );
};