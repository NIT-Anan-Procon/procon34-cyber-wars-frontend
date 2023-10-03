import styled from 'styled-components';

import { colors } from '@/assets/styles';
import { ContentHeader } from '@/components/Elements';
import { PHASE } from '@/features/phases';
import { GoalList, GoalListWrapper } from '@/features/goals';

const _WebViewerWrapper= styled.div<{ phase: string }>`
  height  : 73vh;
  width   : 50vw;
  position: relative;
  display : flex;
  flex-direction: column;
  align-items: center;
`;

const _WebViewerHead= styled.div<{ phase: string }>`
  height: 7rem;
  width: 40rem;
  position: absolute;
  top: -25px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  background: black;
    /* ${(props) => props.phase === PHASE.DEFENCE_PHASE
      ? `${ colors.blueAccent }`
      : `${ colors.danger }`
    }; */
  clip-path: polygon(3% 0, 100% 4%, 98% 97%, 5% 100%);
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    height: 5rem;
    width: 80%;
    z-index: 1;
    background: black;
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
    z-index  : 1;
  };
`;

type WebViewerWrapperProps= {
  phase   : string;
  children: React.ReactNode;
};

export const WebViewerWrapper= (
  { 
    phase,
    children
  }: WebViewerWrapperProps 
) => {
  const webSite= phase === PHASE.DEFENCE_PHASE ? 'MY Website' : 'OPPONENT Website';

  return (
    <_WebViewerWrapper phase={ phase } >
      <_WebViewerHead phase={ phase } >
        <span>{ webSite }</span>
      </_WebViewerHead>
      <_WebViewerContents >
        { children }
        <GoalListWrapper>
          <GoalList />
        </GoalListWrapper>
      </_WebViewerContents>
    </_WebViewerWrapper>
  );
};