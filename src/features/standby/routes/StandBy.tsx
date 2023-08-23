import { RoomIdState, authenticatedUserState, isEnterRoomState } from "@/atoms";
import { Button, Header } from "@/components/Elements";
import { Head } from "@/components/Head";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { RuleHeader } from "../components/RuleHeader";
import { colors } from "@/styles";
import { RuleContent } from "../components/RuleContent";
import { useEffect } from "react";
import { useGetRoomMember } from "../api/get_roomMember";


const StandByLayout= styled.div`
  height : 100%;
  width  : 100%;
  padding: 3rem 10%;
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
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
`;


const UserStateCard= styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const HostUserCard= styled(UserStateCard)`
  grid-column: 2;
  grid-row   : 2;
  display: flex;
`;

const GuestUserCard= styled(UserStateCard)`
  grid-column: 2;
  grid-row: 4;
  display: flex;
`;

const CharactorIcon= styled.div`
  width: 15rem;
  height: 15rem;
  background: black;
  clip-path: polygon(20% 100%, 0% 0%, 100% 0%, 80% 80%); 
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: -20px;
  z-index: 1;
  &::before {
    content: '';
    box-shadow: 10px 10px white;
  }
`;

const UserInfoContent= styled.div`
  display: inline-block;
  width: 40rem;
  height: 10rem;
  background: ${colors.primary};
  transform: skew(-20deg) translateY(100%);
  position: absolute;
  bottom: 50%;
  left: 35px;
  box-shadow: 10px 10px black;
`;

const StatusBox= styled.div`    
  width: 200px;
  height: 2.85rem;
  background: black;
  display: flex;
  align-items: center;
  position: absolute;
  padding-left: 120px;
  top:3px;
  color: white;
  font-size: 1.5rem;
  &::before {
    /* padding: 10px;
    position: absolute;
    content: "";
    top: 0px;
    left: 100px;
    border-top: 3px solid #333;
    z-index: -1; */
  }
`;

const UserNameBox= styled.div`
  width: calc(100% + 20px);
  height: 6rem;
  background: black;
  display: flex;
  align-items: center;
  position: absolute;
  padding-left: 120px;
  bottom: 3px;
  left: 0px;
  color: white;
  font-size: 2.75rem;
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
  const authenticatedUser= useRecoilValue(authenticatedUserState);
  const userStatus= ['HOST','GUEST'];
  const roomId= useRecoilValue(RoomIdState);
  const isJoinedRoom= useRecoilValue(isEnterRoomState);
  const navigate= useNavigate();
  const { getRoomMember }= useGetRoomMember(); 

  
  // useEffect(() => {
  //   const interval= setInterval(() => {
  //     if(isJoinedRoom) {
  //       clearInterval(interval);
  //     } else {
  //       console.log(isJoinedRoom);
  //       // getRoomMember();
  //     }
  //   }, 1000);
  // },[getRoomMember]);

  return (
    <>
      <Head title='待機画面' />
      <StandByLayout>
        <HeaderContainer>
        <Header title='ROOM MATCH' />
        </HeaderContainer>
        <Descriptions>
          <RuleHeader title='ゲームルール' theme={colors.primary}/>
          <RuleContent>
            description
          </RuleContent>
          {/* <RuleHeader title='アタックフェーズ' theme={colors.primary}/>
          <RuleContent>
            description
          </RuleContent>
          <RuleHeader title='ディフェンスフェーズ' theme={colors.primary}/>
          <RuleContent>
            description
          </RuleContent>
          <RuleHeader title='バトルフェーズ' theme={colors.primary}/>
          <RuleContent>
            description
          </RuleContent> */}
        </Descriptions>
        <HostUserCard>
          <CharactorIcon>
            img
          </CharactorIcon>
          <UserInfoContent>
            <StatusBox>
              <span>{userStatus[0]} </span>
            </StatusBox>
            <UserNameBox>
              <span>KUSAKA</span>
              {/* {authenticatedUser.userName} */}
            </UserNameBox>
          </UserInfoContent>
        </HostUserCard>
        <BattleLogo>VS</BattleLogo>
        { isJoinedRoom 
          ? <>
              <GuestUserCard>
                <CharactorIcon>
                  img
                </CharactorIcon>
                <UserInfoContent>
                  <StatusBox>
                    {userStatus[1]} 
                  </StatusBox>
                  <UserNameBox>
                    <span>KUSAKA</span>
                    {/* {authenticatedUser.userName} */}
                  </UserNameBox>
                </UserInfoContent>
              </GuestUserCard>
              <StartButton onClick={() => navigate('attack-phase')}>Game Start</StartButton>
            </>
          : <>loading</>
        }
      </StandByLayout>    
    </>
  );
};