import { colors } from "@/styles";
import styled from "styled-components";

const TitleWrapper= styled.div`
  width: 200px;
  height: 50px;
  background: #020202;
  transform: skew(20deg);
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  &::before {
    background: #020202;
    display: block;
    width: 180px;
    height: 20px;
    padding: 10px;
    position: absolute;
    content: "";
    top: -17px;
    left: 0px;
    transform: skew(3deg)rotate(4deg);
    border-top: 3px solid #333;
    z-index: -1;
  }
`;

const StyledTitle= styled.h1`
  color: white;
  font-size: 18px;
`;

type RuleHeaderProps= {
  title: string;
  theme: string;
}

export const RuleHeader= ({ title, theme }: RuleHeaderProps) => {
  return (
    <TitleWrapper theme={theme}>
      <StyledTitle>
        {title}
      </StyledTitle>
    </TitleWrapper>
  );
}