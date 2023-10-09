import { colors } from '@/assets/styles';
import styled from 'styled-components';
import { GameRuleContentWrapper, GameRuleEditForm, GameRuleSettingWrapper } from '.';
import { RULES } from '../types/ruleDescriptions';
import { PHASE } from '@/features/games/phases';

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

export const GameRulesDescriptions= () => {
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
    </_GameRulesDescriptionsWrapper>
  );
};