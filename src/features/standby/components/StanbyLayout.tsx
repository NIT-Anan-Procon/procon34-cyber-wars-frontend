import styled from 'styled-components';

import { Head }      from '@/components/Head';
import { StandbyHeader } from './StanbyHeader';

const GridLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  padding: 0% 10%;
  display: grid;
  grid-template-rows: 15vh 1fr 10vh;
`;

type StandByLayoutProps= {
  children: React.ReactNode;
}

export const StandbyLayout= ({ children }: StandByLayoutProps) => {
  return (
    <>
      <Head title='待機画面' />
      <GridLayout>
        <StandbyHeader />
        { children }
      </GridLayout>
    </>
  );
}