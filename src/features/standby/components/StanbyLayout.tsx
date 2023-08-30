import styled from 'styled-components';

import { Head }      from '@/components/Head';
import { Header }    from '@/components/Elements';
import { RoomIdBox } from '@/features/rooms/components/RoomIdBox';

const GridLayout= styled.div`
  height : 100vh;
  width  : 100vw;
  padding: 0% 10%;
  display: grid;
`;

const HeaderContainer= styled.div`
  height         : 100%;
  width          : 100%;
  padding-top    : 3.5rem;
  position       : relative;
  display        : flex;
  justify-content: center;
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
          <RoomIdBox roomId={1234} />
        </HeaderContainer>
        { children }
      </GridLayout>
    </>
  );
}