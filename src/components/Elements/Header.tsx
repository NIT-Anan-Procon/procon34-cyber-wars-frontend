import styled from 'styled-components';

import { colors } from '@/assets/styles';

const _Header= styled.div`
  width      : 40rem;
  height     : 10rem;
  position   : relative;
  display    : flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content : '';
    position: absolute;
  };

  &::before {
    bottom  : 20px;
    height  : 3rem;
    width   : 90%;
    background: ${ colors.primary };
    clip-path: polygon(0 44%, 100% 0, 97% 98%, 0 86%);
    z-index   : 2;
  };

  &::after {
    height  : 50%;
    width   : 100%;
    bottom  : -5px;
    background: black;
    clip-path: polygon(0 40%, 100% 0, 97% 98%, 3% 85%);
    transform: rotate( 1deg );
    z-index   : 1;
  };

  > h1 {
    font-size: 4rem;
    color    : ${ colors.bgLighter };
    z-index  : 100;
  };
`;

type HeaderProps= {
  title?: string
}

export const Header= ({ title }: HeaderProps) => {
  return (
    <_Header>
      <h1>{ title }</h1>
    </_Header>
  );
}