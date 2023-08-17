import styled from "styled-components";
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { colors } from "@/styles";

const RouterLinkStyle= styled(RouterLink)`
  margin-left: 1.25rem;
  font-size  : 2rem;
  color      : ${colors.secondary};
  &:hover {
    color     : ${colors.primary};
    transition: 0.3s;
  }
`;

export const Link= ({ children, ...props }: LinkProps) => {
  return (
    <RouterLinkStyle {...props} >
      { children }
    </RouterLinkStyle>
  );
}