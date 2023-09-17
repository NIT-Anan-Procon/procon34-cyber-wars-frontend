import styled from 'styled-components';
import { 

  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout, 
  PhaseTimer, 
  UserBoardsLayout,
  UserScoreBoard
} from "../components";

import { useNavigate } from 'react-router-dom';
import { EditArea } from '@/features/code';
import { DESCRIPTIONS, PHASE } from '../types';
import { useSendCode } from '../../code/api/sendCode';
import { useRecoilValue } from 'recoil';
import { codeState, hasHintState, isHintDrawerState } from '@/atoms';
import { Preview } from '@/features/preview';
import { DisplayHintBox, HintButton, HintForm } from '@/features/hint';
import { Button } from '@/components/Elements';
import { useRef } from 'react';

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

const _SendCodeButton= styled(Button)`
  width: 15rem;
  position: absolute;
  right: 30px;
`;

export const DefencePhase= () => {
  const navigate= useNavigate();
  const currentCode= useRecoilValue(codeState);
  const { sendCode }= useSendCode();
  const iframeRef = useRef(null);
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );
  
  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
          <UserScoreBoard 
            name  = {'日下 遥斗'}
            status= { 'HOST' }
            score = { 100 } 
          /> 
          <PhaseTimer count={''} phaseTitle={ PHASE.DEFENCE_PHASE }/>
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
          <PhaseContentHead description={ DESCRIPTIONS.DEFENCE_PHASE } />
          <PhaseContentBody >
            <EditArea phase={ PHASE.DEFENCE_PHASE } />
            <HintButton />
            { isDrawerHint 
              ? hasHint ?  <DisplayHintBox /> : <HintForm />
              : undefined
            }
          </PhaseContentBody>
          <PhaseContentFoot>
            <_SendCodeButton 
              type='button'
              onClick= { async() => await sendCode( currentCode ) }
            > 
              Send 
            </_SendCodeButton>
          </PhaseContentFoot>
        </PhaseContentsLayout>        
      </_PhaseContents>
    </PhaseLayout>
  );
};