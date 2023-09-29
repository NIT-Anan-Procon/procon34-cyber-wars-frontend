import { colors } from '@/assets/styles';
import styled from 'styled-components';
import { GameRuleContentWrapper } from '.';
import { RULES } from '../types/ruleDescriptions';

const _GameRulesDescriptionsWrapper= styled.div`
  height: 100%;
  width : 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10%;
`;

const _RuleTitle= styled.div`
  line-height  : 10rem;
  width        : 100%;
  border-bottom: 3px solid white;
  background: transparent;

  > span {
    display  : block;
    width    : 20rem;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color     : ${ colors.bgLighter };
    background: black;
  }
`;

type GameRulesDescriptionsProps= {

};

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
      <> アタックフェーズ</>
      <> ディフェンスフェーズ </>
      <> バトルフェーズ </>
    </_GameRulesDescriptionsWrapper>
  );
};