import { colors } from "@/assets/styles";
import styled from "styled-components";

const _Spinner= styled.div<{ styles?: string }>`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  ${(props) => props.styles }

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

type SpinnerProps= {
  styles?: string;
};

export const Spinner= ({ styles }: SpinnerProps ) => {
  return (
    <_Spinner styles={ styles } />
  );
};