import { Description, SlideImageContent, SlideWrapper } from '.';
import explanationSlide from '@/assets/images/explanationSlide.png';

export const ExplanationSlide= () => {
  return (
    <SlideWrapper title={'解説モード'} >
      <Description
        description={
          <span>解説モードでは、課題Webサイトの脆弱性、防御例、攻撃例を解説します。</span>
        }
      />
      <SlideImageContent imagePath={ explanationSlide } />
    </SlideWrapper>
  );
};