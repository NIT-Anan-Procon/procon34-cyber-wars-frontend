import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _HintLayout= styled.div`
  height: 100%;
  width : 100%;
  background: ${ colors.bgDarker };
`;

const _HintLayoutTitle= styled.div`

`;

const _HintLayoutBody= styled.div`

`;

type HintLayoutProps= {
  title: string;
  body : React.ReactNode;
};

export const HintLayout= ({ title, body }: HintLayoutProps) => {
  return (
    <_HintLayout>
      <_HintLayoutTitle>{ title }</_HintLayoutTitle>
      <_HintLayoutBody>{ body }</_HintLayoutBody>
    </_HintLayout>
  );
};