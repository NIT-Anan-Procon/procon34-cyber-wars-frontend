import styled          from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ContentLayout }  from '@/components/Layout';
import { Button }         from '@/components/Elements';
import { ResultUserCard } from '../components';

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

  return (
    <ContentLayout
      headTitle={ 'リザルト画面' }
      header   ={ 'RESULT' }
    >
      <_ResultWrapper>
        <_Result>{ 'YOU WIN' }</_Result>
        <ResultUserCard 
          name    ={ '日下 遥斗' }
          score   ={ 200 } 
          result  ={ 'WIN' }
          userType={ 'MYUSER' } 
        />
        <ResultUserCard 
          name    ={ '木下 聡大' }
          score   ={ 180 } 
          result  ={ 'LOSE' }
          userType={ 'OPPONENTUSER' } 
        />      
      </_ResultWrapper>
      <_NextButton type='button' onClick={() => navigate('../explanation')}>next</_NextButton>
    </ContentLayout>
  );
};