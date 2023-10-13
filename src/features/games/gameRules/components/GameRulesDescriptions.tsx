import styled from 'styled-components';
import { GameRuleContentWrapper, GameRuleEditForm, GameRuleSettingWrapper } from '.';
import { RULES } from '../types/ruleDescriptions';
import { PHASE } from '@/features/games/phases';
import { useRecoilValue } from 'recoil';
import { settingTimeState } from '..';
import { useUpdateTimeLimitMutation } from '../../room/api/updateTimeLimit';
import { Button } from '@/components/Elements';
import { colors } from '@/assets/styles';

const _GameRulesDescriptionsWrapper= styled.div`
  height: 100%;
  width : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _GameRuleSettings= styled.div`
  padding: 5px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const $SaveTimeButton= styled(Button)`
  position: absolute;
  right   : 40px;
  bottom  : -10px;
  height  : 6rem;
  width   : 12rem;
  font-size: 1.6rem;
  background: ${ colors.primary };
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
  z-index: 999;
`;

export const GameRulesDescriptions= () => {
  const timeLimit= useRecoilValue( settingTimeState );
  const updateTimeLimitMutation= useUpdateTimeLimitMutation();

  return (
    <_GameRulesDescriptionsWrapper>
      <GameRuleContentWrapper
        ruleTitle={ '対戦形式' }
        ruleContent={ RULES.BATTLE_STYLE }
      />
      <GameRuleContentWrapper
        ruleTitle={ '制限時間' }
      />
      <_GameRuleSettings>
        <GameRuleSettingWrapper phase={ PHASE.ATTACK_PHASE } >
          <GameRuleEditForm phase={ PHASE.ATTACK_PHASE } />
        </GameRuleSettingWrapper>
        <GameRuleSettingWrapper phase={ PHASE.DEFENCE_PHASE } >
          <GameRuleEditForm phase={ PHASE.DEFENCE_PHASE } />
        </GameRuleSettingWrapper>
        <GameRuleSettingWrapper phase={ PHASE.BATTLE_PHASE } >
          <GameRuleEditForm phase={ PHASE.BATTLE_PHASE } />
        </GameRuleSettingWrapper>        
      </_GameRuleSettings>
      <$SaveTimeButton 
        type='button'
        onClick={
          async() => await updateTimeLimitMutation.mutateAsync(
            {
              attackPhase : timeLimit.attackPhase,
              defencePhase: timeLimit.defencePhase,
              battlePhase : timeLimit.battlePhase
            }
          )
        }
      >
        Save
      </$SaveTimeButton>
    </_GameRulesDescriptionsWrapper>
  );
};