import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _HintLayout= styled.div`
  height: calc( 100% - 8rem );
  width : 50%;

`;

const _HintLayoutTitle= styled.div`
  height  : 4rem;
  width   : 100%;
  display : flex;
  justify-content: center;

  > h1 {
    font-size: 2rem;
    color    : ${ colors.bgLighter };
    z-index  : 100;
  }
`;

const _HintLayoutBody= styled.div`
  height: 100%;
  width : 100%;
  border: 3px solid ${ colors.primary };
  border-radius: 5px;
`;

type HintLayoutProps= {
  title: string;
  body : React.ReactNode;
};

export const HintLayout= ({ title, body }: HintLayoutProps) => {
  return (
    <_HintLayout>
      {/* <_HintLayoutTitle>
        <h1>{ title }</h1>
      </_HintLayoutTitle> */}
      <_HintLayoutBody>{ body }</_HintLayoutBody>
    </_HintLayout>
  );
};