import { Description, SlideWrapper } from '.';
import { DESCRIPTIONS } from '../constants';

export const BattlePhaseSlide= () => {
  return (
    <SlideWrapper title={'バトルフェーズ'} >
      <Description description={ DESCRIPTIONS.BATTLE_PHASE } />
    </SlideWrapper>
  );
};