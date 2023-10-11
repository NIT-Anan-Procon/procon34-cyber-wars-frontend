import styled from 'styled-components';

import { colors } from '@/assets/styles';

const _SlideImageContent= styled.div`
  height : 50vh;
  width  : 70%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ colors.bgDarker };


  > img {
    height: 100%;
  };
`;

type SlideImageContentProps= {
  imagePath: string;
};

export const SlideImageContent= ({ imagePath }: SlideImageContentProps ) => {
  return (
    <_SlideImageContent><img src={ imagePath } /></_SlideImageContent>
  );
};