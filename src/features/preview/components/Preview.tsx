import { previewRefState } from '@/atoms';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { createAbsolutePath } from '../selector/createAbsolutePath';
import { useRef, useEffect } from 'react';

const _PreviewBox= styled.div<{ styles?: string }>`
  width      : 100%;
  height     : 100%;
  border     : none;
  outline    : none;
  background : transparent;

  ${(props) => props.styles};
`;

const _Preview= styled.iframe`
  width      : 100%;
  height     : 100%;
`;

type PreviewProps= {
  codePath ?: string | number ;
  styles   ?: string;
};

export const Preview= (
  { 
    codePath,
    styles,  
  }: PreviewProps
) => {
  // const getCodePath= useRecoilValue( createAbsolutePath(codePath) );
  const iframeRef= useRef(null);
  const [ previewRefValue, setPreviewRefValue ]= useRecoilState( previewRefState );

  useEffect(() => {
    setPreviewRefValue(iframeRef);
  }, []);

  return (
    <_PreviewBox styles={ styles } >
      <_Preview
        ref    = { iframeRef } 
        srcDoc= { `
        <html>
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
              <input type="text" name="user" id="user" placeholder="ユーザー名" required>
              <input type="password" name="pass" id="pass" placeholder="パスワード" required>
              <button type="submit">ログイン</button>
            </form>
          </div>
        </body>
        </html>` } 
      /> 
    </_PreviewBox>
  );
};