import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/assets/styles';
import { Spinner } from '.';

const _Button= styled.button<{ active?: boolean }>`
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

  ${(props) => props.active
    ? css`
        background: ${ colors.primary };
        color     : ${ colors.bgLighter };
      `
    : css`
        background: ${ colors.secondary };
        color     : black; 
      `
  };
`;

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  active   ?: boolean;
} & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      isLoading = false,
      active= false,
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
        active={active}
        {...props}
      >
        {isLoading && <Spinner />}
        {!isLoading && startIcon}
        <span>{props.children}</span> {!isLoading && endIcon}
      </_Button>
    );
  }
);
