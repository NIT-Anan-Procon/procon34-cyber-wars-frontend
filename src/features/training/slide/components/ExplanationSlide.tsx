import { Description, SlideWrapper } from '.';
import { DESCRIPTIONS } from '../constants';
import explanationSlide from '@/assets/images/explanationSlide.png';

export const ExplanationSlide= () => {
  return (
    <SlideWrapper title={'解説モード'} >
      <Description description={ DESCRIPTIONS.EXPLANATION } />
      <img src={ explanationSlide } style={{width:'50%'}}/>
    </SlideWrapper>
  );
};