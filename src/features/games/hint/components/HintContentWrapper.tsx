import styled from 'styled-components';

import { colors } from '@/assets/styles';

const _HintContentWrapper= styled.div`
  height : 100%;
  width  : 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const _HintTitle= styled.div`
  height         : 6rem;
  width          : 20rem;
  position       : relative;
  display        : flex;
  align-items    : center;
  justify-content: center;

  &::before {
    content   : '';
    width     : 100%;
    height    : 100%;
    position  : absolute;
    background: ${ colors.bgLighter };
    clip-path : polygon(5% 8%, 93% 14%, 95% 88%, 10% 90%);
    z-index   : 2;
  };

  > h1 {
    font-size: 2.5rem;
    color    : ${ colors.bgDarker };
    z-index  : 10;
  }
`;

const _HintContainer= styled.div`
  height : 50%;
  width  : 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

type HintContentWrapperProps= {
  children: React.ReactNode;
};

export const HintContentWrapper= ({ children }: HintContentWrapperProps ) => {
  return (
    <_HintContentWrapper>
      <_HintTitle >
        <h1>{ 'HINT' }</h1>
      </_HintTitle>
      <_HintContainer >{ children }</_HintContainer>
    </_HintContentWrapper>
  );
};