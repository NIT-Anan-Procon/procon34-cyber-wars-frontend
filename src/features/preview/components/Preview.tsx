import { codeState } from '@/atoms';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { createAbsolutePath } from '../selector/createAbsolutePath';
import { useRef } from 'react';

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
  iframeRef : React.LegacyRef<HTMLIFrameElement>; 
  codePath ?: string | number ;
  styles   ?: string;
};

export const Preview= (
  { 
    iframeRef,
    codePath,
    styles,  
  }: PreviewProps
) => {
  // const getCodePath= useRecoilValue( createAbsolutePath(codePath) );

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
              <input type="text" name="user" placeholder="ユーザー名" required>
              <input type="password" name="pass" placeholder="パスワード" required>
              <button type="submit">ログイン</button>
            </form>
          </div>
        </body>
        </html>` } 
      /> 
    </_PreviewBox>
  );
};