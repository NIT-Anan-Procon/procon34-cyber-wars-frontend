import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAuthState } from "@/atoms";
import { Head } from "@/components/Head";
import { colors } from "@/styles";

const LandingContainer= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 15rem;
`;

const TitleStyle= styled.h1`
  line-height: 20rem;
  font-size: 17rem;
`;

const StartButtonStyle= styled.button`
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge ${colors.primary};
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background: ${colors.bgDarker};
    transition: 0.5s;
    transform-origin: center;
  }

  &::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background: ${colors.bgDarker};
    transition: 0.5s;
  }

  &:hover::before, &:hover::after {
    transform: scale(0);
  }

  &:hover {
    box-shadow: inset 0px 0px 25px ${colors.primary};
  }
`;

export const Landing = () => {
  const navigate= useNavigate();
  const isAuthenticated= useRecoilValue<boolean>(isAuthState);

  /*No match locationのエラーが出るが、原因はリロードしてしまうとRecoilの状態が初期化されてしまうため*/
  const handleStart= () => {
    if(isAuthenticated) {
      navigate('/cyberwars');
    } else {
      navigate('/auth/sign-in');
    }
  }

  return (
    <>
      <Head description='Welcome to CYBER WARS' />
      <LandingContainer>
        <TitleStyle>
          Title logo
        </TitleStyle>
        <StartButtonStyle onClick={handleStart}>
          Start
        </StartButtonStyle>      
      </LandingContainer>    
    </>
  );
}