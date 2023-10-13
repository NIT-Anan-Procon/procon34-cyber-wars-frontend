import styled from 'styled-components';

import { Header } from '@/components/Elements';

const _SlideWrapper= styled.div`
  height: 100vh;
  width : 100vw;
  padding:  0 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _SlideContent= styled.div`
  height: 80vh;
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: auto;
    width: 90%;
  }
`;

type SlideWrapperProps= {
  title  ?: string;
  children: React.ReactNode;
};

export const SlideWrapper= ({ title, children }: SlideWrapperProps ) => {
  return (
    <_SlideWrapper>
      <Header title={ title } />
      <_SlideContent >{ children }</_SlideContent>
    </_SlideWrapper>
  );
};