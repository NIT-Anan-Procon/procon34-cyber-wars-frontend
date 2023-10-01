import styled from 'styled-components';

import { Head } from '@/components/Head';

const _PhaseLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  display: flex;
  flex-direction: column;
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