import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/Elements';
import { colors } from '@/assets/styles';

const _EndSlideWrapper= styled.div`
  height: 100vh;
  width : 100vw;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const _Description= styled.div`
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 2.8rem;
    color    : ${ colors.bgLighter };    
  }
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
      <_Description>
        <p><span>訓練モードは以上です。対戦モードで、実際に対戦してみましょう。</span></p>
      </_Description>
      <$RedirectToModeButton onClick={() => navigate('../../') } >モード選択へ戻る</$RedirectToModeButton>
    </_EndSlideWrapper>
  );
};