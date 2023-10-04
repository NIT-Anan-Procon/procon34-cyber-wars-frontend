import styled, { css }          from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ContentLayout }  from '@/components/Layout';
import { Button }         from '@/components/Elements';
import { ResultUserCard } from '../components';
import { useFetchScoresQuery } from '@/features/scores';
import { useFetchRoomInfoQuery } from '@/features/room';
import { useAuthenticatedUserQuery } from '@/features/auth';
import { OPPONENT_NAME_KEY, SCORES_KEY, USER_NAME_KEY } from '@/constants/responseKeys';
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
  font-size: 10rem;
  position : absolute;
  top      : 20%;
  left     : 50%;
  transform: translateX(-50%);
  color: 
    ${(props) => props.result === 'YOU WIN'
        ? `${ colors.primary }`
        : `${ colors.danger }`
    };
`;

const _NextButton= styled(Button)`
  height  : 10rem;
  width   : 20rem;
  position: absolute;
  right   : 20px;
  bottom  : 20px;
  border-radius: 0;
  font-size: 4rem;
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

  const result= scoresQuery.data[ SCORES_KEY ][0] > scoresQuery.data[ SCORES_KEY ][1] ? 'YOU WIN' : 'YOU LOSE'

  return (
    <ContentLayout
      headTitle={ 'リザルト画面' }
      header   ={ 'RESULT' }
    >        
      <_Result result={ result } >{ result }</_Result>
      <_ResultWrapper>
        <ResultUserCard
          name    ={ authUserQuery.data[ USER_NAME_KEY ] }
          score   ={ scoresQuery.data[ SCORES_KEY ][0] } 
          result  ={ 'WIN' }
          usertype={ 'MYUSER' } 
        />
        <ResultUserCard 
          name    ={ roomInfoQuery.data[ OPPONENT_NAME_KEY ] }
          score   ={ scoresQuery.data[ SCORES_KEY ][1] } 
          result  ={ 'LOSE' }
          usertype={ 'OPPONENTUSER' } 
        />      
      </_ResultWrapper>
      <_NextButton type='button' onClick={() => navigate('../explanation')}>Next</_NextButton>
    </ContentLayout>
  );
};