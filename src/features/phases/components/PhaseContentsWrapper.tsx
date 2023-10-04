import styled     from 'styled-components';
import { colors } from '@/assets/styles';
import { HintButtonList, HintDisplayDrawer, HintLayout, HintList } from '@/features/hint';
import { WebViewer, WebViewerWrapper } from '@/features/webViewer';

const _PhaseContentsLayout= styled.div`
  height         : 82vh;
  width          : 100%;
  padding        : 20px 20px;
  display        : flex;
  justify-content: center;
  align-items    : center;
  column-gap     : 2rem;
  background     : ${ colors.bgDarker };
  font-size      : 1.5rem;
`;

const _PhaseContentBody= styled.div`
  height       : 100%;
  width        : 50vw;
  position     : relative;
  display      : flex;
  column-gap   : 10px;
  background   : ${ colors.bgDarker };
  border-radius: 5px;
`;

const _PhaseContentFoot= styled.div`
  height     : 10rem;
  width      : 100%;
  position   : absolute;
  bottom     : 0;
  right      : 20px;
  display    : flex;
  align-items: center;
  background : transparent;
  clip-path: polygon(0 0, 100% 11%, 100% 97%, 0 100%);
`;

type PhaseContentsLayoutProps= {
  phase : string;
  body  : React.ReactNode;
  foot  : React.ReactNode;
};

export const PhaseContentsWrapper= (
  { 
    phase,
    body,
    foot
  }: PhaseContentsLayoutProps
) => {
  return (
    <_PhaseContentsLayout>
      <WebViewerWrapper phase={ phase } >
        <WebViewer phase={ phase } />
      </WebViewerWrapper>
      <_PhaseContentBody >
        { body }
        <HintDisplayDrawer >
          <HintLayout
            title= {'ポイントを消費して、ヒントを閲覧'}
            body= {
              <HintList />
            }
          />
        </HintDisplayDrawer>          
      </_PhaseContentBody>
      <_PhaseContentFoot >{ foot }</_PhaseContentFoot>
    </_PhaseContentsLayout>
  );
};  