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
  background: transparent;
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

export const Loading= () => {
  return (
    <_FullScreen>
      <_Loader />
      <h1>Now Loading...</h1>
    </_FullScreen>
  );
};