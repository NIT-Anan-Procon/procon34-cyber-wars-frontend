import { useRef, useEffect } from 'react';
import {  useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { focusedInputElementState, targetInputNameState } from '../states/atoms';
import { TARGET_CODE_PATH_KEY, useFetchChallengeQuery } from '../../challenge';
import { REVISION_PATH_KEY, useFetchRevisionCodeQuery } from '../../codeController/api';
import { PHASE } from '../../phases';
import { PHP_URL } from '../config';

const _Preview= styled.iframe<{ styles?: string }>`
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

  ${(props) => props.styles};
`;

type PreviewProps= {
  phase  : string;
  styles?: string;
};

export const WebViewer= (
  { 
    phase,
    styles,  
  }: PreviewProps
) => {
  const iframeRef= useRef<HTMLIFrameElement | null>(null);
  const setFocusedInputElement= useSetRecoilState( focusedInputElementState );
  const setTargetInputName= useSetRecoilState( targetInputNameState );
  const challengeQuery= useFetchChallengeQuery({});
  const revisionQuery = useFetchRevisionCodeQuery();

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

  const mergeAbsolutePath= phase !== PHASE.BATTLE_PHASE
    ? `${ PHP_URL + challengeQuery?.data?.targetPath + '/target.php' }`
    : `${ PHP_URL + challengeQuery?.data?.targetPath + '/revision/' + revisionQuery?.data?.[ REVISION_PATH_KEY ] + '.php' }`

  return (
    <_Preview
      ref   = { iframeRef }
      styles= { styles }
      src   = { mergeAbsolutePath }
    /> 
  );
};