import { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { viewerRefState } from '../states/atom';

const _PreviewBox= styled.div<{ styles?: string }>`
  width      : 100%;
  height     : 100%;
  border     : none;
  outline    : none;
  position   : absolute;
  display    : flex;
  align-items: center;
  justify-content: center;
  background : transparent;
  z-index    : 2;

  ${(props) => props.styles};
`;

const _Preview= styled.iframe`
  width      : 100%;
  height     : 100%;
  z-index    : 9999;
  clip-path: polygon(6% 6%, 94% 6%, 94% 94%, 6% 94%);

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

  useEffect(() => {
    setViewerRefValue( iframeRef );
  }, []);

  return (
    <_PreviewBox styles={ styles } >
      <_Preview
        ref= { iframeRef } 
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
              margin: 0 auto;
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
              height: 40px;
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
          </div>
        </body>
        </html>`}
        // src= { getCodePath } 
      /> 
    </_PreviewBox>
  );
};