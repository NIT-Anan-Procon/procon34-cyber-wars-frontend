import styled from 'styled-components';

import { colors } from '@/assets/styles';
import { ContentHeader } from '@/components/Elements';

const _WebViewerWrapper= styled.div`
  height: 100%;
  width : 50vw;
  position  : relative;
  background: ${ colors.bgDarker };
`;

const _WebViewerHead= styled.div`
  height  : 8rem;
  width   : 20rem;
  position: absolute;
  top: 0%;
  left: 50%;
  display : flex;
  justify-content: center;
  align-items    : center;
  background: #17f1bb;
  transform : rotate(5deg) translate( -50%, -50% );
  z-index: 1;
  > span {
    font-size  : 3.45rem;
    font-weight: bolder;
    color      : #ffffff;
    transform  : rotate(-10deg);
    border-bottom: 3px solid #706d6d;
    z-index    : 2;
  }
  &::before {
    content   : '';
    position  : absolute;
    inset     : 0;
    height    : 8rem;
    width     : 20rem;  
    background: #000000;
    transform : rotate(-10deg);
    z-index   : -10;
  }
`;

type WebViewerWrapperProps= {
  children: React.ReactNode;
};

export const WebViewerWrapper= ({ children }: WebViewerWrapperProps ) => {
  return (
    <_WebViewerWrapper>
      {/* <_WebViewerHead >
        <h1>My WebSite</h1>
      </_WebViewerHead> */}

      { children }
    </_WebViewerWrapper>
  );
};