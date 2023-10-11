import { Description, SlideWrapper } from ".";
import { DESCRIPTIONS } from "../constants";

export const AttackPhaseSlide= () => {
  return (
    <SlideWrapper title={'アタックフェーズ'} >
      <Description description={ DESCRIPTIONS.ATTACK_PHASE[0] } />
    </SlideWrapper>
  );
};