import { RoomIdState, UserStatusFamily } from "@/atoms";
import { Button, Header } from "@/components/Elements";
import { Head } from "@/components/Head";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const StandByLayout= styled.div`
  height : 100%;
  width  : 100%;
  padding: 3rem 20%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows   : 10rem 25% 5rem 25% 1fr;
  column-gap: 5rem;
  row-gap   : 3rem;
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

const Descriptions= styled.div`
  grid-column: 1;
  grid-row: 2 / span 4;
  background: white;
`;

const UserStateCard= styled.div`
  background: white;
  height: 100%;
  width: 100%;
`;

const HostCard= styled(UserStateCard)`
  grid-column: 2;
  grid-row   : 2;
`;

const GuestCard= styled(UserStateCard)`
  grid-column: 2;
  grid-row: 4;
`;

const BattleLogo= styled.div`
  grid-column: 2;
  grid-row: 3;
  display: flex;
  justify-content: center;
  font-size: 5rem;
  font-weight: bold;
  color: white;
`;

const StartButton= styled(Button)`
  grid-column: 2 ;
  grid-row: 5;
`;

export const StandBy= () => {
  const userName= 'Kusaka';
  const userStatus= 'HOST';
  const roomId= useRecoilValue(RoomIdState);
  const isJoinedRoom= true;
  const navigate= useNavigate();

  return (
    <>
      <Head title='待機画面' />
      <StandByLayout>
        <HeaderContainer>
        <Header title='ROOM MATCH' />
        </HeaderContainer>
        <Descriptions>
          ゲームルール<br/>
          アタックフェーズ<br/>
          ディフェンスフェーズ<br/>
          バトルフェーズ<br/>
          解説モード
        </Descriptions>
        <HostCard>
          {userName}
          {userStatus}  
        </HostCard>
        <BattleLogo>VS</BattleLogo>
        { isJoinedRoom 
          ? <>
              <GuestCard>
                {userName}
                {userStatus}
              </GuestCard>
              <StartButton onClick={() => navigate('attack-phase')}>Game Start</StartButton>
            </>
          : <>loading</>
        }
      </StandByLayout>    
    </>
  );
};