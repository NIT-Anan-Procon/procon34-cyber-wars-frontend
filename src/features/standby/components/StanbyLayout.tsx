import styled from 'styled-components';

import { Head }      from '@/components/Head';
import { Header } from '@/components/Elements';
import { colors } from '@/assets/styles';

const _StandbyLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  padding: 10px ;
  display: flex;
  flex-direction: column;
  align-items   : center;
  row-gap: 20px;
`;

const _StandbyContents= styled.div`
  height : 100%;
  width  : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ colors.bgDarker };
`; 

type StandByLayoutProps= {
  children: React.ReactNode;
}

export const StandbyLayout= ({ children }: StandByLayoutProps) => {
  return (
    <>
      <Head title='待機画面' />
      <_StandbyLayout>
        <Header title='待機画面' />
        <_StandbyContents >{ children }</_StandbyContents>
      </_StandbyLayout>
    </>
  );
}