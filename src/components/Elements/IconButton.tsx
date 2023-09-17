import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _IconButton= styled.button<{ styles?: string }>`
  height: 60px;
  width : 60px;
  background: #111111;
  border-radius: 50%;
  border: none;

  > img {
    width: 20px;
    color: ${ colors.primary }
  }

  ${( props ) => props.styles }
`;

type IconButtonProps= React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string;
  styles ?: string;
};

export const IconButton= (
  {
    type= 'button',
    icon,
    styles,
    ...props
  }: IconButtonProps
) => {
  return (
    <_IconButton
      type  = { type }
      styles= { styles }
      { ...props }
    >
      <img src={ icon } />
    </_IconButton>
  );
};