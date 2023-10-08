import styled from 'styled-components';

import { Head } from '@/components/Head';
import { WebViewer, WebViewerWrapper } from '@/features/games/webViewer';
import { PhaseStatusContents } from '.';
import { colors } from '@/assets/styles';

const _PhaseLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows   : 18vh 1fr;
`;

const _PhaseHeadContents= styled.div`
  grid-column: 1 / span 2;
  grid-row   : 1;
  height: 100%;
  width : 100%;
`;

const _PhaseContents= styled.div`
  grid-column: 2;
  padding: 20px;
  height: 100%;
  max-height: 82vh;
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ colors.bgDarker };
`;

const WebViewerPosition= `
  grid-column:1;
  grid-row:2;
  padding : 40px 0 40px 40px;
  background: ${ colors.bgDarker };
`;

type PhaseLayoutProps= {
  title: string;
  phase: string;
  redirectUrl: string;
  children: React.ReactNode;
};

export const PhaseLayout= (
  {
    title,
    phase,
    redirectUrl,
    children
  }: PhaseLayoutProps
) => {
  return (
    <>
      <Head title={ title } />
      <_PhaseLayout>
        <_PhaseHeadContents >
          <PhaseStatusContents phase={ phase } redirectUrl={ redirectUrl } />
        </_PhaseHeadContents>
          <WebViewerWrapper 
            phase = { phase }
            styles= { WebViewerPosition }
          >
            <WebViewer phase={ phase } />
          </WebViewerWrapper>          
        <_PhaseContents >{ children }</_PhaseContents>
      </_PhaseLayout>    
    </>
  );
};