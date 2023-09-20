import { isEnterRoomState } from "@/atoms";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { StandbyLayout } from "../components";
import { StandbyUser } from "../components/StandbyUser";
import testIcon from '@/assets/images/attack_phase.svg';
import { Button } from "@/components/Elements";
import { useEffect, useState } from 'react';
import { fetchRoomInfo } from "@/features/rooms/api/fetchRoomInfo";
import { useAuthUser } from "@/features/auth";
import { IS_HOST_KEY, OPPONENT_NAME_KEY, USER_NAME_KEY } from "@/config/responseKeys";
import { useRoomInfoQuery } from '../../rooms/api/fetchRoomInfo';
import { deleteRoom } from "@/features/rooms/api/deleteRoom";
import { startGame } from "../api/startGame";

const _FlexUsers= styled.div`
  grid-row: 2;
  height : 100%;
  width  : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap : 4.5rem;
`;

const _BattleIcon= styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: white;
`;

const $StartButton= styled(Button)`
  height  : 10rem;
  width   : 30rem;
  position: absolute;
  bottom  : 0;
  right   : 0;
`;

export const StandBy= () => {
  const isJoinedRoom=  useRecoilValue(isEnterRoomState);
  const navigate= useNavigate();
  const authUserQuery= useAuthUser();
  const { data: info, isSuccess }= useRoomInfoQuery({
    config: {
      refetchInterval: (data) => data? 0 : 1000
    }
  });

  if(authUserQuery.isLoading) {
    return <></>
  }
  if(info?.[ OPPONENT_NAME_KEY ]=== null && isSuccess) {
    deleteRoom();
    navigate('../..');
  }
  
  return (
    <>
      <StandbyLayout>
        <_FlexUsers>
          <StandbyUser 
            userName= { authUserQuery?.data?.[USER_NAME_KEY] }
            ishost  = { info?.[ IS_HOST_KEY ] }
            iconPath={testIcon} 
          />
          <_BattleIcon>VS</_BattleIcon>
          { isSuccess
            ?
            <>
              <StandbyUser
                userName= {info?.[ OPPONENT_NAME_KEY ]}
                ishost  = { info?.[ IS_HOST_KEY ] }
                iconPath= { testIcon } 
              />          
              <$StartButton onClick={ async() => {
                  await startGame(),
                  navigate('../phase/attack-phase')
                }}
              >
                ゲーム開始
              </$StartButton>   
            </>
            : <p>loading</p>           
          }
        </_FlexUsers>
      </StandbyLayout>    
    </>
  );
};