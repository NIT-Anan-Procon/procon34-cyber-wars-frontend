import { forwardRef } from 'react';
import styled         from 'styled-components';

import { Loading } from '.';

const ButtonStyle= styled.button`
  width: 100%;
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
      <ButtonStyle
        ref={ref}
        type={type}
        {...props}
      >
        {isLoading && <Loading />}
        {!isLoading && startIcon}
        <span>{props.children}</span> {!isLoading && endIcon}
      </ButtonStyle>
    );
  }
);

Button.displayName = 'Button';