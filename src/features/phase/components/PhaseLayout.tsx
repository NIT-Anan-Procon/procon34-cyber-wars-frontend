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
  title: string;
  children: React.ReactNode;
};

export const PhaseLayout= ({ title, children }: PhaseLayoutProps) => {
  return (
    <>
      <Head title={ title } />
      <_PhaseLayout>
        { children }
      </_PhaseLayout>    
    </>
  );
};