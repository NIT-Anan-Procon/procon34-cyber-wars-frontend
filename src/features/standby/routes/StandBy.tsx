import styled from 'styled-components';

import { colors }        from '@/assets/styles';
import { StandbyLayout } from '../components';
import { CharacterStandbyCard } from '@/features/character';
import { GameRulesDescriptions, GameRulesLayout } from '@/features/gameRules';
import { USER_NAME_KEY, useAuthenticatedUserQuery } from '@/features/auth';
import { IS_HOST_KEY, OPPONENT_NAME_KEY, useExitRoomMutation, useFetchRoomInfoQuery } from '@/features/room';
import { Button } from '@/components/Elements';

const _StandbyUsers= styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

const _FightTypo= styled.span`
  font-size: 5.5rem;
  color    : ${ colors.bgLighter };
  text-shadow: 3px 10px black;
`;

const $StartButton= styled(Button)`
  
`;

export const StandBy= () => {
  const authUserQuery   = useAuthenticatedUserQuery({});
  const roomInfoQuery   = useFetchRoomInfoQuery({});
  const exitRoomMutation= useExitRoomMutation();

  if( authUserQuery.isLoading || roomInfoQuery.isLoading ) {
    return <>Loading</>
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
        <CharacterStandbyCard
          userName= { hostUser }
          status  = { 'HOST' }
        />
        <_FightTypo>VS</_FightTypo>
        <CharacterStandbyCard
          userName= { guestUser }
          status  = { 'GUEST' }
        />
        
        <$StartButton> START </$StartButton>          
      </_StandbyUsers>
    </StandbyLayout>    
  );
};