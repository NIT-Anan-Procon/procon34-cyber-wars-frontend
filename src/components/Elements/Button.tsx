import { forwardRef } from 'react';
import styled         from 'styled-components';

import { colors } from '@/assets/styles';
import { Loading } from '../Animation';

const _Button= styled.button`
  margin-top   : 1.75rem;
  width        : 100%;
  height       : 4.75rem;
  font-size    : 1.75rem;
  font-weight  : 700;
  color        : black;
  border-radius: 0.8rem;
  border       : 0;
  outline      : 0;
  background   : ${colors.secondary};

  &:hover {
    color     : ${colors.bgLighter}; 
    background: ${colors.primary};
    transition: 0.5s;
  }
`;

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
} & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <_Button
        ref={ref}
        type={type}
        {...props}
      >
        {isLoading && <Loading />}
        {!isLoading && startIcon}
        <span>{props.children}</span> {!isLoading && endIcon}
      </_Button>
    );
  }
);