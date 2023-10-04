import styled from 'styled-components';

import { colors }        from '@/assets/styles';
import { StandbyLayout } from '../components';
import { CharacterStandbyCard } from '@/features/character';
import { GameRulesDescriptions, GameRulesLayout } from '@/features/gameRules';
import { USER_NAME_KEY, useAuthenticatedUserQuery } from '@/features/auth';
import { IS_HOST_KEY, IS_STARTED_KEY, OPPONENT_NAME_KEY, useExitRoomMutation, useFetchRoomInfoQuery } from '@/features/room';
import { Button } from '@/components/Elements';
import { useNavigate } from 'react-router-dom';
import { Loading } from '@/components/Animation';

const _StandbyUsers= styled.div`
  height: calc( 100% - 5rem );
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
  background: ${ colors.bgDarker };
  
`;

const StandbyUserHead= styled.div`
  position : absolute;
  height   : 5rem;
  width    : 100%;
  top      : -20px;
  height   : 5rem;
  font-size: 3rem;
  color    : ${ colors.primary };
  display  : flex;
  justify-content: center;
  align-items: center;
`;

const _FightText= styled.span`
  font-size: 5.5rem;
  color    : ${ colors.bgLighter };
  text-shadow: 3px 10px black;
`;

const $StartButton= styled(Button)`
  position: absolute;
  right   : 0px;
  bottom  : -40px;
  height  : 8rem;
  width   : 30rem;
  font-size: 2.6rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
`;

export const StandBy= () => {
  const navigate= useNavigate();
  const authUserQuery   = useAuthenticatedUserQuery({});
  const roomInfoQuery   = useFetchRoomInfoQuery({});
  const exitRoomMutation= useExitRoomMutation();

  if( authUserQuery.isLoading || roomInfoQuery.isLoading ) {
    return <Loading />
  };

  if( !authUserQuery.data || !roomInfoQuery.data ) return null;

  const hostUser = roomInfoQuery.data[ IS_HOST_KEY ]  ? authUserQuery.data[ USER_NAME_KEY ] : roomInfoQuery.data[  OPPONENT_NAME_KEY ];
  const guestUser= !roomInfoQuery.data[ IS_HOST_KEY ] ? authUserQuery.data[ USER_NAME_KEY ] : roomInfoQuery.data[  OPPONENT_NAME_KEY ];

  return (
    <StandbyLayout>
      <GameRulesLayout>
        <GameRulesDescriptions />
      </GameRulesLayout>
      <_StandbyUsers>
          { roomInfoQuery.data[ IS_STARTED_KEY ]
            ? undefined
            : <StandbyUserHead>対戦相手を待っています...</StandbyUserHead>
          }
        <CharacterStandbyCard
          userName= { hostUser }
          status  = { 'HOST' }
        />
        <_FightText>VS</_FightText>
        {/* <CharacterStandbyCard
          userName= { guestUser }
          status  = { 'GUEST' }
        /> */}
        { roomInfoQuery.data[ IS_STARTED_KEY ] && roomInfoQuery.data[ IS_HOST_KEY ]
          ? <$StartButton type='button' onClick={() => navigate('../phase/attack-phase')}> START </$StartButton>
          : undefined
        }
      </_StandbyUsers>
    </StandbyLayout>    
  );
};