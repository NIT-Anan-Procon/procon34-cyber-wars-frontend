import styled from 'styled-components';

import { colors } from '@/assets/styles';
import { PHASE } from '@/features/phases';

const _WebViewerWrapper= styled.div<{ styles?: string }>`
  height  : 100%;
  width   : 100%;
  position: relative;
  display : flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.styles }
`;

const _WebViewerHead= styled.div<{ phase: string }>`
  height: 7rem;
  width: 40rem;
  position: absolute;
  top: 10px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  background: black;
  clip-path: polygon(3% 0, 100% 4%, 98% 97%, 5% 100%);
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    height: 5rem;
    width: 80%;
    z-index: 1;
    background: 
      ${(props) => props.phase === PHASE.DEFENCE_PHASE
        ? `#2F1FF6`
        : `${ colors.redAccent }`
      };
    clip-path: polygon(2% 76%, 97% 36%, 100% 97%, 0% 100%);
  };

  > span {
    font-size: 3rem;
    color    : ${ colors.bgLighter };
    transform: rotate( -2deg );
    z-index: 10;
  };
`;

const _WebViewerContents= styled.div`
  height  : 100%;
  width   : 100%;
  padding : 20px;
  position: relative;
  display : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  row-gap: 25px;

  &::before {
    content : '';
    position: absolute;
    height  : 100%;
    width   : 100%;
    background: #000000;
    clip-path: polygon(0 0, 100% 3%, 97% 98%, 0% 100%);
    z-index  : 1;
  };
`;

type WebViewerWrapperProps= {
  phase   : string;
  styles ?: string;
  children: React.ReactNode;
};

export const WebViewerWrapper= (
  { 
    phase,
    styles,
    children
  }: WebViewerWrapperProps 
) => {
  const webSite= phase === PHASE.DEFENCE_PHASE ? 'MY Website' : 'OPPONENT Website';

  return (
    <_WebViewerWrapper styles={ styles } >
      <_WebViewerHead phase={ phase } >
        <span>{ webSite }</span>
      </_WebViewerHead>
      <_WebViewerContents >
        { children }
      </_WebViewerContents>
    </_WebViewerWrapper>
  );
};