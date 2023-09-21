import styled          from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ContentLayout }  from '@/components/Layout';
import { Button }         from '@/components/Elements';
import { ResultUserCard } from '../components';
import { useScoresQuery } from '@/features/score';
import { useRoomInfoQuery } from '@/features/rooms/api/fetchRoomInfo';
import { fetchAuthenticatedUser } from '@/features/auth';
import { useEffect } from 'react';
import { OPPONENT_NAME_KEY, SCORES_KEY, USER_NAME_KEY } from '@/config/responseKeys';
import { useRecoilValue } from 'recoil';
import { authenticatedUserState } from '@/atoms';

const _ResultWrapper= styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

const _Result= styled.h1`
  font-size: 10rem;
`;

const _NextButton= styled(Button)`
  height  : 10rem;
  width   : 20rem;
  position: absolute;
  right   : 0;
  bottom  : 0;
`;

export const Result= () => {
  const navigate= useNavigate();
  const { authUser }=fetchAuthenticatedUser();
  const roomInfoQuery= useRoomInfoQuery({});
  const { data: scores, isLoading }= useScoresQuery({
    config: {
      select: ( data ) => {
        return data[ SCORES_KEY ]
      },
      refetchInterval: 1000 * 3
    }
  })
  const authMyUser= useRecoilValue( authenticatedUserState );

  useEffect(() => {
    authUser()
  },[])

  if( roomInfoQuery.isLoading || isLoading ) {
    return <>Loading</>
  }

  return (
    <ContentLayout
      headTitle={ 'リザルト画面' }
      header   ={ 'RESULT' }
    >
      <_ResultWrapper>
        <_Result>
          { scores[0] > scores[1] 
            ? 'YOU WIN'
            : 'YOU LOSE'
          }
        </_Result>
        <ResultUserCard
          name    ={ authMyUser[ USER_NAME_KEY ] }
          score   ={ scores[0] } 
          result  ={ 'WIN' }
          usertype={ 'MYUSER' } 
        />
        <ResultUserCard 
          name    ={ roomInfoQuery?.data[ OPPONENT_NAME_KEY ] }
          score   ={ scores[1] } 
          result  ={ 'LOSE' }
          usertype={ 'OPPONENTUSER' } 
        />      
      </_ResultWrapper>
      <_NextButton type='button' onClick={() => navigate('../explanation')}>next</_NextButton>
    </ContentLayout>
  );
};