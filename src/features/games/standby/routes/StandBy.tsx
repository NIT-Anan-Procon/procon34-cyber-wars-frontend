import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors }       from '@/assets/styles';
import { Loading }      from '@/components/Animation';
import { Button, Spinner } from '@/components/Elements';
import { StandbyLayout } from '../components';
import { CharacterStandbyCard } from '@/features/games/character';
import { GameRulesDescriptions, GameRulesLayout } from '@/features/games/gameRules';
import { USER_NAME_KEY, useAuthenticatedUserQuery } from '@/features/auth';
import { IS_HOST_KEY, IS_STARTED_KEY, OPPONENT_NAME_KEY, useExitRoomMutation, useFetchRoomInfoQuery } from '@/features/games/room';

import { usePatchStartGameMutation } from '../../matching';
import { useRecoilValue } from 'recoil';
import { inviteIdState } from '../../room/states/atoms';


const _StandbyUsers= styled.div`
  height: calc( 100% - 5rem );
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5%;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${ colors.bgDarker };
    clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%);
    z-index: -1;
  };
`;

const _StandbyInviteId= styled.h1`
  margin-top: 5rem;
  height: 6rem;
  width: 50%;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: ${ colors.primary };
  border-bottom: 3px solid ${ colors.primary };
  > span {
    margin-left: 20px;
    font-size: 4rem;
    color: ${ colors.bgLighter };
  };
`;

const _StandbyState= styled.div`
  width : 100%;
`;

const _StandbyUserHead= styled.div<{ canStarted?: boolean }>`
  position : absolute;
  height   : 10rem;
  padding  : 10px;
  width    : auto;
  top      : -20px;
  left     : 20px;
  height   : 5rem;
  font-size: 2rem;
  font-weight: bold;
  display  : flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 97%);
  ${(props) => props.canStarted
    ? css`
        color:${ colors.bgLighter };
        background: ${ colors.primary };
      `
    : css`
        color: ${ colors.primary };
        background: ${ colors.bgDarker };
      `
  };
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

const $OpponentLoader= styled(Spinner)`
  width: 100%;
  height: 100%;
`;

export const StandBy= () => {
  const navigate= useNavigate();
  const inviteId= useRecoilValue( inviteIdState );
  
  const authUserQuery    = useAuthenticatedUserQuery({});
  const startGameMutation= usePatchStartGameMutation();
  const exitRoomMutation = useExitRoomMutation();

  const roomInfoQuery= useFetchRoomInfoQuery({
    config: {
      refetchInterval: ( data ) =>  !data ? 1000: false 
    }
  });

  if( authUserQuery.isLoading || roomInfoQuery.isLoading ) {
    return <Loading />
  };

  if( !authUserQuery.data || !roomInfoQuery.data ) return null;

  if( roomInfoQuery.data[ OPPONENT_NAME_KEY ] === null ) {
    exitRoomMutation.mutateAsync();
    navigate('../../');
  };

  const hostUser = roomInfoQuery.data[ IS_HOST_KEY ]  ? authUserQuery.data[ USER_NAME_KEY ] : roomInfoQuery.data[  OPPONENT_NAME_KEY ];
  const guestUser= !roomInfoQuery.data[ IS_HOST_KEY ] ? authUserQuery.data[ USER_NAME_KEY ] : roomInfoQuery.data[  OPPONENT_NAME_KEY ];
  const canStarted= roomInfoQuery.data[ IS_STARTED_KEY ];

  return (
    <StandbyLayout>
      <GameRulesLayout>
        <GameRulesDescriptions />
      </GameRulesLayout>
      <_StandbyUsers>
        <_StandbyInviteId>
          {'ルームID'}
          <span>{ inviteId }</span>
        </_StandbyInviteId>
        <_StandbyState >
          { canStarted
            ? <_StandbyUserHead canStarted={ canStarted } >準備完了！！</_StandbyUserHead>
            : <_StandbyUserHead canStarted={ canStarted } >対戦相手を待っています...</_StandbyUserHead>
          }          
        </_StandbyState>
        <CharacterStandbyCard
          userName= { hostUser }
          status  = { 'HOST' }
        />
        <_FightText>VS</_FightText>
        { canStarted
            ? <CharacterStandbyCard
                userName= { guestUser }
                status  = { 'GUEST' }
              />
            : <$OpponentLoader />
          }
        { roomInfoQuery?.data[ IS_STARTED_KEY ] && roomInfoQuery?.data[ IS_HOST_KEY ]
          ? <$StartButton 
              type='button'
              onClick={() => {
                startGameMutation.mutateAsync()
                navigate('../phase/attack-phase')
              }}
            >
              START
            </$StartButton>
          : undefined
        }
      </_StandbyUsers>
    </StandbyLayout>    
  );
};