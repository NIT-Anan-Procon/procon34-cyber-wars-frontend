import { Head } from '@/components/Head';
import styled from 'styled-components';

const _PhaseLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

type PhaseLayoutProps= {
  title: string;
  children: React.ReactNode;
};

export const PhaseLayout= ({ title, children }: PhaseLayoutProps) => {
  return (
    <>
      <Head title={ title } />
      <_PhaseLayout>{ children }</_PhaseLayout>    
    </>
  );
};