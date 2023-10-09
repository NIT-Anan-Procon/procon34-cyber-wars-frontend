import { useRef, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { focusedInputElementState, targetInputNameState, viewerRefState } from '../states/atoms';

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
  const iframeRef= useRef(null);
  const [ viewerRefValue, setViewerRefValue ]= useRecoilState( viewerRefState );
  const setFocusedInputElement= useSetRecoilState( focusedInputElementState );
  const setTargetInputName= useSetRecoilState( targetInputNameState );

  useEffect(() => {
    function getInputsFromIframe() { 
        const iframe = iframeRef.current; if (!iframe) return;

      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const inputElements = iframeDocument.querySelectorAll('input');
      const inputsArray = Array.from(inputElements);

      for (let input of inputsArray) {
        input?.addEventListener('focus', () => {
          setFocusedInputElement( input );
          setTargetInputName( input.name );
        });
      }
    }

    iframeRef.current.addEventListener('load', getInputsFromIframe);

  }, [ iframeRef, setFocusedInputElement ]);

  return (
    <_Preview
      ref= { iframeRef }
      styles={ styles } 
      srcDoc={`<html>
        <head>
          <style>
            /* CSSでページの見た目を整える */
            body {
              font-family: Arial, sans-serif;
              background-color: lightblue;
            }
        
            .container {
              width: 500px;
              margin: 100px auto;
              padding: 20px;
              border: 1px solid black;
              background-color: white;
            }
        
            h1 {
              text-align: center;
            }
        
            form {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
        
            input {
              margin: 10px;
            }
        
            button {
              width: 100px;
              height: 40px;o9
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>ログインページ</h1>
            <form action="login.php" method="post">
              <input type="text" name="user" placeholder="ユーザー名" required>
              <input type="password" name="pass" placeholder="パスワード" required>
              <button type="submit">ログイン</button>
            </form>

        </body>
        </html>`}
        // src= { getCodePath } 
    /> 
  );
};