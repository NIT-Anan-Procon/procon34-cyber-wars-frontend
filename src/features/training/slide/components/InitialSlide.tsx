import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';

import { Description, SlideWrapper } from '.';
import { DESCRIPTIONS } from '../constants';
import { Button } from '@/components/Elements';
import { colors } from '@/assets/styles';

import attackPhaseIcon  from '@/assets/images/attack_phase.svg';
import defencePhaseIcon from '@/assets/images/defence_phase.svg';
import battlePhaseIcon  from '@/assets/images/battle_phas.svg';

const _PhaseIcons= styled.div`

`;

const _PhaseIconWrapper= styled.div`
  height: 10rem;
  width : 100%;
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

const _PhaseIcon= styled.div`
  height: 10rem;
  width : 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ colors.bgDarker };
  border-radius: 50%;
  border: 5px solid ${ colors.primary };

  > img {
    width: 50%;
  }
`;

const _PhaseText= styled.div`
  font-size: 2.75rem;
  font-weight: bolder;
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
        <_PhaseIconWrapper >
          <_PhaseIcon><img src={ attackPhaseIcon } /></_PhaseIcon>
          <_PhaseText >{ 'アタックフェーズ' }</_PhaseText>
        </_PhaseIconWrapper>
        <_PhaseIconWrapper >
          <_PhaseIcon><img src={ defencePhaseIcon } /></_PhaseIcon>
          <_PhaseText >{ 'ディフェンスフェーズ' }</_PhaseText>
        </_PhaseIconWrapper>
        <_PhaseIconWrapper >
          <_PhaseIcon><img src={ battlePhaseIcon } /></_PhaseIcon>
          <_PhaseText >{ 'バトルフェーズ' }</_PhaseText>
        </_PhaseIconWrapper>
      </_PhaseIcons>

      <$ReturnButton onClick={ () => navigate('../') } >
        <SubdirectoryArrowLeftIcon style={ ReturnIconStyle } />
      </$ReturnButton>
    </SlideWrapper>
  );
};