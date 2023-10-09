import styled from 'styled-components';

import { Head } from '@/components/Head';
import { colors } from '@/assets/styles/colors';

import { cautionText } from '../types/description';

import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import cautionIcon from '@/assets/images/cautionIcon.svg';

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
  padding        : 10rem;
  height         : 100%;
  width          : 100%;

  > img {
    height: 100px;
    width: 100px;
  } 
`;

const ContentsWrapper= styled.div`
  width          : 100%;
  height         : 100%;
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  row-gap        : 6rem;
  background     : transparent;
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
  color    : ${ colors.bgLighter };
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
  justify-content: center;
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
            <img src={ cautionIcon } style={{ width:'30rem' }}/>
          </ContentsWrapper>
        </ImageContents>
        <FormContainer>
          {children}
        </FormContainer>
      </GridLayout>    
    </>
  );
}