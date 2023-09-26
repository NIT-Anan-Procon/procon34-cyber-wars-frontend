import React from 'react';
import styled from 'styled-components';

import { colors } from '@/assets/styles';
import { useDisclosure } from '@/hooks/useDisclosure';

const _HintLayout= styled.div`
  height: 100%;
  width : 100%;
  background: ${ colors.bgDarker };
`;

const _HintLayoutTitle= styled.div`

`;

const _HintLayoutBody= styled.div`

`;

type HintDrawerProps= {
  title: string;
  body : React.ReactNode;
  triggerButton: React.ReactElement;
};

export const HintDrawer= (
  {
    title,
    body,
    triggerButton,
  }: HintDrawerProps
) => {
  const { close, open, isOpen }= useDisclosure();

  return (
    <>
      { React.cloneElement( triggerButton, { onClick: open } ) }
      <_HintLayout>
        <_HintLayoutTitle>{ title }</_HintLayoutTitle>
        <_HintLayoutBody>{ body }</_HintLayoutBody>
      </_HintLayout>    
    </>
  );
};