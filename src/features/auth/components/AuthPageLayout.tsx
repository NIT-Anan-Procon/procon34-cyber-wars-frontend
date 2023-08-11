import styled from 'styled-components';

import { colors } from '@/styles/colors';

type AuthPageLayoutProps= {
  children: React.ReactNode;
}

const GridLayout= styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 5rem;
`;

const ImageContents= styled.div`
  grid-column: 1;
  margin: 5rem;
  height: calc(100% - 10rem);
  width : 100%;
  background: ${ colors.bgLighter };
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 3px #3a3a3a inset;
`;

const ContentsWrapper= styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormWrapper= styled.div`
  grid-column: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthPageLayout= ({ children }: AuthPageLayoutProps) => {
  return (
    <GridLayout>
      <ImageContents>
        <ContentsWrapper>
          注意書きと画像
        </ContentsWrapper>
      </ImageContents>
      <FormWrapper>
        {children}
      </FormWrapper>
    </GridLayout>
  );
}