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

type SlideWrapperProps= {
  title  ?: string;
  children: React.ReactNode;
};

export const SlideWrapper= ({ title, children }: SlideWrapperProps ) => {
  return (
    <_SlideWrapper>
      <Header title={ title } />
      { children }
    </_SlideWrapper>
  );
};