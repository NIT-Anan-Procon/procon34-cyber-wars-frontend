import { colors } from "@/styles";
import styled from "styled-components";

const TitleWrapper= styled.div`
  width: 200px;
  height: 50px;
  background: #020202;
  transform: skew(20deg) translateY(-50%);
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px ${colors.primary};
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
}

export const RuleHeader= ({ title, theme }: RuleHeaderProps) => {
  return (
    <TitleWrapper >
      <StyledTitle>
        {title}
      </StyledTitle>
    </TitleWrapper>
  );
}