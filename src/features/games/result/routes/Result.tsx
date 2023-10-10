import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Button }         from '@/components/Elements';
import { ResultUserCard } from '../components';
import { useFetchScoresQuery } from '@/features/games/scores';
import { useFetchRoomInfoQuery } from '@/features/games/room';
import { useAuthenticatedUserQuery } from '@/features/auth';
import { colors } from '@/assets/styles';
import { Loading } from '@/components/Animation';

const _ResultWrapper= styled.div`
  height     : 100%;
  width      : 100vw;
  position   : absolute;
  left       : 50%;
  top        : 50%;
  transform  : translate(-50%, -50%);
  display    : flex;
  align-items: center;
  justify-content: center;
  column-gap: 10%;
`;

const _Result= styled.h1<{ result: string }>`
  font-size: 12rem;
  position : absolute;
  top      : 10%;
  left     : 50%;
  transform: translateX(-50%);
  color: 
    ${(props) => props.result === 'YOU WIN'
        ? `${ colors.primary }`
        : `${ colors.danger }`
    };
`;

const _NextButton= styled(Button)`
  height  : 8rem;
  width   : 25rem;
  position: absolute;
  right   : 20px;
  bottom  : 20px;
  border-radius: 0;
  font-size: 3rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
`;

export const Result= () => {
  const navigate= useNavigate();
  const authUserQuery=useAuthenticatedUserQuery({});
  const roomInfoQuery= useFetchRoomInfoQuery({});
  const scoresQuery= useFetchScoresQuery({});

  if( authUserQuery.isLoading || roomInfoQuery.isLoading || scoresQuery.isLoading ) {
    return <Loading />
  };

  if( !authUserQuery.data || !roomInfoQuery.data || !scoresQuery.data ) return null;



  const result= scoresQuery.data?.scores[0] > scoresQuery.data?.scores[1] ? 'YOU WIN' : 'YOU LOSE'

  return (
    <>
      <_Result result={ result } >{ result }</_Result>
      <_ResultWrapper>
        <ResultUserCard
          name={
            roomInfoQuery?.data?.host
            ? authUserQuery?.data?.name
            : roomInfoQuery?.data?.opponentName
          }
          status={ 'HOST' } 
        />
        <ResultUserCard 
          name={             
            !roomInfoQuery?.data?.host
            ? authUserQuery?.data?.name
            : roomInfoQuery?.data?.opponentName
          }
          status={ 'GUEST' } 
        />      
      </_ResultWrapper>
      <_NextButton type='button' onClick={() => navigate('../explanation')}>Next</_NextButton>
    </>
  );
};