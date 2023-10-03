import React from 'react';
import styled from 'styled-components';

import { colors } from '@/assets/styles';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Button } from '@/components/Elements';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const _HintLayout= styled.div`
  height    : 100%;
  width     : 10rem;
  background: transparent;
  position  : relative;
  z-index   : 999;
`;

const _HintHead= styled.div`
  height  : 10rem;
  width   : 18rem;
  display : flex;
  align-items: center;
  justify-content: center;
  position  : fixed;
  background: ${ colors.primary };
  color     :black;
  top       : 18vh;
  right     : 0;
  font-size : 2.6rem;
  clip-path : polygon(0 0, 100% 0, 100% 100%, 11% 92%);
`;

const _HintLayoutBody= styled.div`
  height    : auto;
  width     : 12rem;
  background: black;
  position  : relative;
  display   : flex;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 97%);
  z-index  : -1;
`;

type HintLayoutProps= {
  children: React.ReactNode;
};

export const HintLayout= (
  {
    children
  }: HintLayoutProps
) => {

  return (
    <_HintLayout>
      <_HintHead>
        <PriorityHighIcon style={{ fontSize: '2.6rem' }} />
        HINT
      </_HintHead>
      <_HintLayoutBody >{ children }</_HintLayoutBody>
    </_HintLayout>
  );
};