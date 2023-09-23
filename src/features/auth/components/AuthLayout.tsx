import styled from 'styled-components';

import { Head } from '@/components/Head';
import { colors } from '@/assets/styles/colors';

import { cautionText } from '../types/description';

import ReportProblemIcon from '@mui/icons-material/ReportProblem';

type AuthLayoutProps= {
  title   : string,
  children: React.ReactNode;
};

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
  padding        : 10rem 10rem;
  display        : flex;
  flex-direction : column;
  align-items    : center;
  row-gap        : 6rem;
  background     : ${ colors.bgLighter };
  border-radius  : 1rem;
  box-shadow     : 0px 0px 10px 3px #3a3a3a inset;
`;

const _CautionTitle= styled.h1`
  font-size: 3rem;
  display: flex;
  align-items: center;
  column-gap: 20px;
  color: ${ colors.danger }
`;

const _CautionText= styled.p`
  font-size: 2rem;
  color    : #616161;
  font-weight: 500;
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
            <_CautionTitle>
              <ReportProblemIcon style={{ fontSize: '4rem'}}/>
              <span>利用上の注意</span>
            </_CautionTitle>
            { cautionText.map(( text, index ) => (
                <_CautionText key={index} >{ text }</_CautionText>
              ))
            }
          <div>
            image
          </div>
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