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
`;

const ImageContents= styled.div`
  grid-column    : 1;
  padding        : 5rem 0rem 5rem 5rem;
  height         : 100%;
  width          : 100%;  
`;

const ContentsWrapper= styled.div`
  width          : 100%;
  height         : 100%;
  display        : flex;
  justify-content: center;
  background     : ${ colors.bgLighter };
  border-radius  : 1rem;
  box-shadow     : 0px 0px 10px 3px #3a3a3a inset;
`;

const FormContainer= styled.div`
  grid-column   : 2;
  padding       : 5rem 0;
  height        : 100%;
  width         : 100%;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  row-gap       : 2rem;
`;

const LogoArea= styled.div` 
  width          : 50%;
  height         : 10%;
  display        : flex;
  justify-content: center;
  align-items    : center;
  background     : grey;
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
        <FormContainer>
          <LogoArea>
            logo
          </LogoArea>
          {children}
        </FormContainer>
      </GridLayout>    
    </>
  );
}