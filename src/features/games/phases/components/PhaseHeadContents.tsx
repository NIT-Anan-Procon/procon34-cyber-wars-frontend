import styled from 'styled-components';

import FlagIcon from '@mui/icons-material/Flag';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeIcon from '@mui/icons-material/Code';

import { colors } from '@/assets/styles';
import { Button } from '@/components/Elements';
import { useRecoilState } from 'recoil';
import { isDrawGoalState } from '@/features/games/goals';
import { isHintDrawState } from '@/features/games/hint/states/atom';
import { isShowCodeState } from '@/features/games/codeController/states';
import { PHASE } from '..';

const _PhaseHeadContentsWrapper= styled.div`
  height : 6rem;
  width  : 100%;
  padding-right: 20px;
  padding-left: 40px;
  background : black;
  display    : flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const _PhaseHeadContentsHeader= styled.h1`
  width    : 100%;
  font-size: 2rem;
  color    : ${ colors.bgLighter };
`;

const _PhaseHeadContents= styled.div`
  height : 100%;
  width  : auto;
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap : 10px;
`;

const $PhaseContentButton= styled(Button)`
  height: 5rem;
  width : 5rem;
`;

const IconStyle= {
  fontSize: '2.5rem'
};

type PhaseHeadContentsProps= {
  title   : string;
  phase   : string;
};

export const PhaseHeadContents= (
  { 
    title,
    phase
  }: PhaseHeadContentsProps
) => {
  const [ isShowCode, setIsShowCode ]= useRecoilState( isShowCodeState );
  const [ isDrawGoal, setIsDrawGoal ]= useRecoilState( isDrawGoalState );
  const [ isDrawHint, setIsDrawHint ]= useRecoilState( isHintDrawState );

  const handleShowCode= () => {
    setIsShowCode( ! isShowCode );
  };

  const handleDrawGoal= () => {
    setIsDrawGoal( !isDrawGoal );
    setIsDrawHint( false );
  };

  const handleDrawHint= () => {
    setIsDrawHint( !isDrawHint );
    setIsDrawGoal( false );
  };

  return (
    <_PhaseHeadContentsWrapper >
      <_PhaseHeadContentsHeader >{ title }</_PhaseHeadContentsHeader>
      <_PhaseHeadContents >
        { phase === PHASE.ATTACK_PHASE
          ? <$PhaseContentButton active={ isShowCode } onClick={ handleShowCode } >
              <CodeIcon style={ IconStyle } />
            </$PhaseContentButton>
          : undefined
        }
        <$PhaseContentButton active={ isDrawGoal } onClick={ handleDrawGoal } >
          <FlagIcon style={ IconStyle } />
        </$PhaseContentButton>
        <$PhaseContentButton active={ isDrawHint } onClick={ handleDrawHint } >
          <LightbulbIcon style={ IconStyle } />
        </$PhaseContentButton>
      </_PhaseHeadContents>
    </_PhaseHeadContentsWrapper>
  );
};