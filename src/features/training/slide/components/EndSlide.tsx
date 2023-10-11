import styled from 'styled-components';
import { Button } from '@/components/Elements';
import { useNavigate } from 'react-router-dom';
import { Description } from '.';
import { DESCRIPTIONS } from '../constants';

const _EndSlideWrapper= styled.div`
  height: 100vh;
  width : 100vw;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const $RedirectToModeButton= styled(Button)`
  height  : 6rem;
  width   : 35rem;
  font-size: 2.6rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
`;

export const EndSlide= () => {
  const navigate= useNavigate();

  return (
    <_EndSlideWrapper >
      <Description description={ DESCRIPTIONS.END } />
      <$RedirectToModeButton onClick={() => navigate('../../') } >モード選択へ戻る</$RedirectToModeButton>
    </_EndSlideWrapper>
  );
};