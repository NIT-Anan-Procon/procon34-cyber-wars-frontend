import { Description, SlideImageContent, SlideWrapper } from '.';
import { PHASE } from '@/features/games/phases';
import { PhaseTitleText } from './PhaseTitleText';
import attackSlide from '@/assets/images/attackSlide.png';

export const AttackPhaseSlide= () => {
  return (
    <SlideWrapper title={'アタックフェーズ'} >
      <Description
        description={
          <>
            <PhaseTitleText phase={ PHASE.ATTACK_PHASE } phaseTitle={'アタックフェーズ'} />
            <span>では、課題webサイトを攻撃し、どれだけ情報を盗み出せるかを競います。SQLインジェクションやOSコマンドインジェクションを駆使し、相手より多くの情報を盗み出しましょう。</span>          
          </>
        }  
      />
      <SlideImageContent imagePath={ attackSlide } />
    </SlideWrapper>
  );
};