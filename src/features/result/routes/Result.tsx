import { Button, Header } from "@/components/Elements";
import { useNavigate } from "react-router-dom";
import { ResultLayout, ResultUserCard } from "../components";
import styled from 'styled-components';

const _Result= styled.div`
  grid-column: 1 / span 2;
  grid-row   : 1;
  height     : 25vh;
  width      : 100%;
  display    : flex;
  align-items: center;
  justify-content: center;
  
  > h1 {
    font-size: 7rem;
    color    : white;
  }
`;

const _NextButton= styled(Button)`
  grid-row: 4;
`;

export const Result= () => {
  const navigate= useNavigate();

  return (
    <ResultLayout>
      <_Result>
        <h1>Result</h1>
      </_Result>
      <ResultUserCard 
        name={ '日下 遥斗' }
        score={ 200 } 
        result={ 'WIN' } 
      />
      {/* <ResultUserCard 
        name={ '木下 聡大' }
        score={ 180 } 
        result={ 'LOSE' } 
      /> */}
      <_NextButton type='button' onClick={() => navigate('../explanation')}>next</_NextButton>
    </ResultLayout>
  );
};