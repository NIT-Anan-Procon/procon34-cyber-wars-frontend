import styled from 'styled-components';
import { 
  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentForm,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout, 
  PhaseTimer, 
  UserBoardsLayout,
  UserScoreBoard
} from '../components';

import { DESCRIPTIONS, PHASE } from '../types';
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { hasHintState, isHintDrawerState, sendKeyState } from '@/atoms';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { Preview } from '@/features/preview';
import { useSendKey } from '@/features/sendKeys';
import { DisplayHintBox, HintButton, HintForm } from '@/features/hint';
import { BATTLE_SEND_KEY_URL } from '../../../config/apiUrls';
import { EditArea } from '@/features/code';

const _PhaseHead= styled.div`
  height: 30vh;
  width : 100%;
  display: flex;
`;

const _PhaseContents= styled.div`
  height : 70vh;
  width  : 100%;
  display: flex;
  justify-content: center;
`;

export const BattlePhase= () => {
  // const [ checkedOption, updateCheckedOption ]= useAtomValueChange( vulnerabilityListState );
  const [ key, updateKey ]= useAtomValueChange( sendKeyState );
  const { sendKeyData }= useSendKey();
  const iframeRef = useRef(null);
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );
  // function handleClick() {
  //   const input = iframeRef.current.contentDocument.querySelector('input');
  //   input.value = '挿入したい値';
  // }
  
  return (
    <PhaseLayout title='バトルフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
          <UserScoreBoard 
            name  = {'日下 遥斗'}
            status= { 'HOST' }
            score = { 100 } 
          /> 
          <PhaseTimer count={''} phaseTitle={ PHASE.BATTLE_PHASE }/>
          <UserScoreBoard 
            name  = {'木下 聡大'}
            status= { 'GUEST' }
            score = { 100 }           
          />
        </UserBoardsLayout>      
      </_PhaseHead>
      <_PhaseContents>
        <Preview
          iframeRef= { iframeRef }
          codePath = { '1' }
        />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.BATTLE_PHASE } />
          <PhaseContentBody >
            <EditArea phase={ PHASE.BATTLE_PHASE } />
            <HintButton />
            { isDrawerHint 
              ? hasHint ?  <DisplayHintBox /> : <HintForm />
              : undefined
            }
          </PhaseContentBody>
          <PhaseContentFoot>
            <PhaseContentForm
              id={ 'battle_sendKey' }
              submitFnEndpoint={ BATTLE_SEND_KEY_URL }
            />
          </PhaseContentFoot>
        </PhaseContentsLayout>        
      </_PhaseContents>
    </PhaseLayout>
  );
};