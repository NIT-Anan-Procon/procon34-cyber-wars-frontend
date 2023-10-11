import { Description, SlideWrapper } from '.';
import { DESCRIPTIONS } from '../constants';

export const DefencePhaseSlide= () => {
  return (
    <SlideWrapper title={'ディフェンスフェーズ'} >
      <Description description={ DESCRIPTIONS.DEFENCE_PHASE } />
    </SlideWrapper>
  );
};