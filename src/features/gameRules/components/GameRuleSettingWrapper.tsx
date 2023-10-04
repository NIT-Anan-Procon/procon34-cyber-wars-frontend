import { PHASE } from '@/features/phases';
import styled from 'styled-components';

import attackPhaseIcon  from '@/assets/images/attack_phase.svg';
import defencePhaseIcon from '@/assets/images/defence_phase.svg';
import battlePhaseIcon  from '@/assets/images/battle_phas.svg'
import { GameRuleEditForm } from '.';
import { colors } from '@/assets/styles';
import { Button } from '@/components/Elements';

const _GameRuleSettingsWrapper= styled.div`
  height : 5rem;
  width  : 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const _GameRuleContents= styled.div`
  height  : 5rem;
  width   : 100%;
  position: relative;
  display : flex;
  align-items: center;
  z-index: 100;

  &::before {
    content : '';
    position: absolute;
    height  : 100%;
    width   : 100%;  
    background : #000000;
    clip-path: polygon(5% 8%, 100% 0, 100% 100%, 2% 97%);
    z-index: -1;
  };
`;

const _SettingIconWrapper= styled.div<{ phase: string }>`
  margin-right: 20px;
  height : 5rem;
  width  : 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    ${(props) => props.phase === PHASE.ATTACK_PHASE
      ? `${ colors.redAccent }`
      : props.phase === PHASE.DEFENCE_PHASE
      ? `${ colors.blueAccent }`
      : `${ colors.yellowAccent }`
    };
  clip-path: polygon(5% 3%, 97% 7%, 100% 92%, 0 98%);
`;

const _SettingIcon= styled.img`
  width: 75%;
  z-index: 999;
`;

const _SettingTitle= styled.h1`
  font-size  : 1.8rem;
  color      : ${ colors.bgLighter };
`;


type GameRuleSettingsProps= {
  phase: string;
  children: React.ReactNode;
};

export const GameRuleSettingWrapper= (
  { 
    phase,
    children
  }: GameRuleSettingsProps
) => {
  const settingPhaseIcon= 
    phase === PHASE.ATTACK_PHASE 
    ? attackPhaseIcon
    : phase === PHASE.DEFENCE_PHASE
    ? defencePhaseIcon
    : battlePhaseIcon

  const phaseTitle= 
    phase === PHASE.ATTACK_PHASE 
    ? 'アタックフェーズ'
    : phase === PHASE.DEFENCE_PHASE
    ? 'ディフェンスフェーズ'
    : 'バトルフェーズ'

  return (
    <_GameRuleSettingsWrapper>
      <_GameRuleContents >
        <_SettingIconWrapper phase={ phase } >
          <_SettingIcon src={ settingPhaseIcon } />
        </_SettingIconWrapper>
        <_SettingTitle >{ phaseTitle }</_SettingTitle>        
      </_GameRuleContents>
      <GameRuleEditForm phase={ phase } />
    </_GameRuleSettingsWrapper>
  );
};