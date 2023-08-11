import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from "@/atoms";

const LandingContainer= styled.div`
  padding-top: 20rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10rem;
`;

const TitleStyle= styled.h1`
  line-height: 14rem;
  font-size: 4rem;
`;
const StartButtonStyle= styled.button`
  width: 10rem;
  height: 3rem;
  
`;

export const Landing = () => {
  const navigate= useNavigate();
  const isAuthenticated= useRecoilValue<boolean>(authState);

  const handleStart= () => {
    if(isAuthenticated) {
      navigate('/cyberwars');
    } else {
      navigate('/auth/sign-in');
    }
  }

  return (
    <LandingContainer>
      <TitleStyle>
        CYBER WARS
      </TitleStyle>
      <StartButtonStyle onClick={handleStart}>
        Start
      </StartButtonStyle>      
    </LandingContainer>
  );
}