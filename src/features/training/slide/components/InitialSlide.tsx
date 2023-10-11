import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Description, SlideWrapper } from '.';
import { DESCRIPTIONS } from '../constants';
import { Button } from '@/components/Elements';

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
`;

export  const InitialSlide= () => {
  const navigate= useNavigate();

  return (
    <SlideWrapper title={'訓練モード'} >
      <Description description={ DESCRIPTIONS.INITIAL } />
      <$ReturnButton onClick={ () => navigate('../') } >
        
      </$ReturnButton>
    </SlideWrapper>
  );
};