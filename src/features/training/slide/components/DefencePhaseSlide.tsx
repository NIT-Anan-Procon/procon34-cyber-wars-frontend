import { PHASE } from '@/features/games/phases';
import { Description, SlideImageContent, SlideWrapper } from '.';
import { PhaseTitleText } from './PhaseTitleText';
import defenceSlide from '@/assets/images/defenceSlide.png'

export const DefencePhaseSlide= () => {
  return (
    <SlideWrapper title={'ディフェンスフェーズ'} >
      <Description 
        description={
          <>
            <PhaseTitleText phase={ PHASE.DEFENCE_PHASE } phaseTitle={ 'ディフェンスフェーズ' } />
            <span>では、</span>
            <PhaseTitleText phase={ PHASE.ATTACK_PHASE } phaseTitle={ 'アタックフェーズ' } />
            <span>で気づいた課題webサイトの脆弱性を、直接コーディングして修正します。</span>          
          </>
        }
      />
      <SlideImageContent imagePath={ defenceSlide } />
    </SlideWrapper>
  );
};