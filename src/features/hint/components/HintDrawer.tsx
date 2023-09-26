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
};

export const HintDrawer= (
  {
    title,
    body,
  }: HintDrawerProps
) => {

  return (
    <>
      <_HintLayout>
        <_HintLayoutTitle>{ title }</_HintLayoutTitle>
        <_HintLayoutBody>{ body }</_HintLayoutBody>
      </_HintLayout>    
    </>
  );
};