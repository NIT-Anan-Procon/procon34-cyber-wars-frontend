import { colors } from "@/assets/styles";
import styled from "styled-components";

const _FullScreen= styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width : 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width : 100%;
    background: ${ colors.bgDarker };
    opacity: 0.6;
  }
`;

const _Loader= styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }

  &::before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, ${colors.primary} 0%, #212121 50%);
    animation: spin .5s infinite linear;
  }

  &::after {
    width: 85%;
    height: 85%;
    background: ${ colors.bgDarker };
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const _LoaderText= styled.h1`
  position : absolute;
  top      : calc(50% + 100px);
  left     : 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color    : ${ colors.primary };
`;

export const Loading= () => {
  return (
    <_FullScreen>
      <_Loader />
      <_LoaderText>Now Loading...</_LoaderText>
    </_FullScreen>
  );
};