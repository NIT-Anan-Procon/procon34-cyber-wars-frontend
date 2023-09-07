import { Head } from '@/components/Head';
import styled from 'styled-components';

const _ResultLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  padding: 0% 10%;
  display: grid;
  grid-template-rows: 15vh 1fr 10vh;
`;

type ResultLayoutProps= {
  children: React.ReactNode;
};

export const ResultLayout= ({ children }: ResultLayoutProps) => {
  return (
    <>
      <Head title= {'リザルト画面'} />
      <_ResultLayout>
        { children }
      </_ResultLayout>    
    </>
  );
};