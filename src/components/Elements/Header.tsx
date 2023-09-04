import { colors } from '@/assets/styles';
import styled from 'styled-components';

const StyledHeader= styled.div`
  width: 100vw;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.75rem;
  color: ${colors.secondary};
  position : relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(50% - 120px);
    transform: translate(-100%,-50%);
    width: 80px;
    height: 5px;
    background: ${colors.primary};
    border-radius: 10px;
    box-shadow: 0px 3px 10px ${colors.primary};
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(50% + 120px);
    transform: translate(0,-50%);
    width: 80px;
    height: 5px;
    background: ${colors.primary};
    border-radius: 10px;
    box-shadow: 0px 3px 10px ${colors.primary};
  }
`;

type HeaderProps= {
  title: string
}

export const Header= ({ title }: HeaderProps) => {
  return (
    <StyledHeader>{title}</StyledHeader>
  );
}