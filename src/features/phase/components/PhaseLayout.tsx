import { Head } from '@/components/Head';
import styled from 'styled-components';

const _PhaseLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows   : 10vh 15vh 75vh;
`;

type PhaseLayoutProps= {
  children: React.ReactNode;
};

export const PhaseLayout= ({ children }: PhaseLayoutProps) => {
  return (
    <>
      <Head title={ 'ゲーム画面' } />
      <_PhaseLayout>
        { children }
      </_PhaseLayout>    
    </>
  );
};