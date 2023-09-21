import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { hasHintState, isHintDrawerState } from '@/atoms';
import { Preview }     from '@/features/preview';
import { HintButton, HintLayout, HintList } from '@/features/hint';
import { BATTLE_SEND_KEY_URL } from '@/config/apiUrls';
import { EditArea } from '@/features/code';
import { Timer, TimerWrapper, useFetchStartTime } from '@/features/timer';
import { DESCRIPTIONS, PHASE } from '../types';
import { UserBoardsLayout, UserScoreBoard } from '@/features/users';
import { useFetchChallenge } from '../../challenge/api/fetchChallenge';
import { 
  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentForm,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout,  
} from '../components';
import { fetchAuthenticatedUser } from '@/features/auth';

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
  const iframeRef = useRef(null);
  const isDrawerHint= useRecoilValue( isHintDrawerState );
  const hasHint= useRecoilValue( hasHintState );
  const { startTime }= useFetchStartTime();

  const { fetchChallenge }= useFetchChallenge();
  const { authUser }= fetchAuthenticatedUser();
  
  useEffect(() => {
    startTime(),
    authUser(),
    fetchChallenge()
  },[]);

  return (
    <PhaseLayout title='バトルフェーズ'>
      <_PhaseHead>
        <UserBoardsLayout>
        <UserScoreBoard
            userName={
              roomMember.host
              ? authMyUser.name
              : roomMember.opponentName
            }
            ishost= { true }
            score={
              roomMember.host
              ? scores[0]
              : scores[1]
            }
          /> 
          <TimerWrapper phase={ PHASE.ATTACK_PHASE } >
            <Timer 
              targetTime = { 300 }
              redirectUrl= { 'defence-phase' }
            />
          </TimerWrapper>
          <UserScoreBoard 
            userName={
              !roomMember.host
              ? authMyUser.name
              : roomMember.opponentName
            }
            ishost= { false }
            score={
              !roomMember.host
              ? scores[0]
              : scores[1]
            }
          />
        </UserBoardsLayout>      
      </_PhaseHead>
      <_PhaseContents>
        <Preview phase={ PHASE.BATTLE_PHASE } />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.BATTLE_PHASE } />
          <PhaseContentBody >
            <EditArea phase={ PHASE.BATTLE_PHASE } />
            <HintButton />
            { isDrawerHint
                ? <HintLayout
                    title= {'ポイントを消費して、ヒントを閲覧'}
                    body= {
                      <HintList />
                    }
                />
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