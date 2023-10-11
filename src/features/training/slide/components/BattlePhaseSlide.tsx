import { PHASE } from '@/features/games/phases';
import { Description, SlideImageContent, SlideWrapper } from '.';
import { PhaseTitleText } from './PhaseTitleText';
import battleSlide from '@/assets/images/battleSlide.png';

export const BattlePhaseSlide= () => {
  return (
    <SlideWrapper title={'バトルフェーズ'} >
      <Description
        description={
          <>
            <PhaseTitleText phase={ PHASE.BATTLE_PHASE } phaseTitle={ 'バトルフェーズ' } />
            <span>では、</span>
            <PhaseTitleText phase={ PHASE.DEFENCE_PHASE } phaseTitle={ 'ディフェンスフェーズ' } />
            <span>で相手が改善した課題Webサイトに攻撃を仕掛けます。相手が改善した課題Webサイトの脆弱性を見つけ出せるかが勝敗を左右します。</span>   
          </>
        }
      />
      <SlideImageContent imagePath={ battleSlide } />
    </SlideWrapper>
  );
};