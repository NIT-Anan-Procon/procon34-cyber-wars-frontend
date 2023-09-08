import { Head } from '@/components/Head';
import styled from 'styled-components';

const _ResultLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  padding: 0% 10%;
  display: flex;
  flex-direction: column;
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