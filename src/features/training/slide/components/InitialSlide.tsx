import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';

import { Description, SlideWrapper } from '.';
import { DESCRIPTIONS } from '../constants';
import { Button } from '@/components/Elements';
import { colors } from '@/assets/styles';

const _PhaseIcons= styled.div`

`;

const _PhaseIconWrapper= styled.div`

`;

const _PhaseIcon= styled.div`
  height: 5rem;
  width : 5rem;
  background: ${ colors.bgDarker };

  > img {
    width: 75%;
  }
`;

const $ReturnButton= styled(Button)`
  height  : 10rem;
  width   : 20rem;
  display : flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top     : 0;
  left    : 0;
  border-radius: 0px 0px 20px 0px;
  background: ${ colors.bgDarker };
`;

const ReturnIconStyle= {
  fontSize: '5rem',
  color   : `${ colors.bgLighter }` 
};

export  const InitialSlide= () => {
  const navigate= useNavigate();

  return (
    <SlideWrapper title={'訓練モード'} >
      <Description description={ DESCRIPTIONS.INITIAL } />

      <_PhaseIcons >
        <_PhaseIcon><img></_PhaseIcon>
        <_PhaseIcon></_PhaseIcon>
        <_PhaseIcon></_PhaseIcon>
      </_PhaseIcons>

      <$ReturnButton onClick={ () => navigate('../') } >
        <SubdirectoryArrowLeftIcon style={ ReturnIconStyle } />
      </$ReturnButton>
    </SlideWrapper>
  );
};