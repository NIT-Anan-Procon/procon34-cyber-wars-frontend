import styled from 'styled-components';

import { colors } from '@/styles/colors';
import { Head } from '@/components/Head';

type AuthPageLayoutProps= {
  title   : string,
  children: React.ReactNode;
}

const GridLayout= styled.div`
  height : 100%;
  width  : 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows   : 15% 1fr;
`;

const ImageContents= styled.div`
  grid-column  : 1;
  grid-row     : 1 / span 2;
  margin       : 5rem;
  height       : calc(100% - 10rem);
  width        : 100%;
  background   : ${ colors.bgLighter };
  border-radius: 1rem;
  box-shadow   : 0px 0px 10px 3px #3a3a3a inset;
`;

const ContentsWrapper= styled.div`
  width  : 100%;
  display: flex;
  justify-content: center;
`;

const LogoArea= styled.div`
  grid-column: 2;
  grid-row   : 1 / 2;
  width      : 100%;
  height     : 100%;
  background : grey;
`;
const FormContainer= styled.div`
  grid-column: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthPageLayout= ({ title, children }: AuthPageLayoutProps) => {
  return (
    <>
      <Head title= {title} />
      <GridLayout>
        <ImageContents>
          <ContentsWrapper>
            注意書きと画像
          </ContentsWrapper>
        </ImageContents>
        <LogoArea>
          logo
        </LogoArea>
        <FormContainer>
          {children}
        </FormContainer>
      </GridLayout>    
    </>
  );
}