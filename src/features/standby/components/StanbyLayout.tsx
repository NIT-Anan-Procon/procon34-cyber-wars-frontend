import styled from 'styled-components';

import { Head }   from '@/components/Head';
import { Header } from '@/components/Elements';

const GridLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  padding: 0 10%;
  display: grid;
  grid-template-columns: 40vw 1fr;
  grid-template-rows   : 15vh 30vh 5vh 30vh 20vh;
`;

const HeaderContainer= styled.div`
  position       : relative;
  grid-row       : 1;
  grid-column    : 1 / span 2;
  width          : 100%;
  height         : 100%;
  display        : flex;
  justify-content: center;
  align-items    : center;
`;

type StandByLayoutProps= {
  children: React.ReactNode;
}

export const StandbyLayout= ({ children }: StandByLayoutProps) => {
  return (
    <>
      <Head title='待機画面' />
      <GridLayout>
        <HeaderContainer>
          <Header title='ROOM MATCH' />
        </HeaderContainer>
        { children }
      </GridLayout>
    </>
  );
}