import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { ATTACK_SEND_KEY_URL } from '@/config/apiUrls';
import { Timer, TimerWrapper } from '@/features/timer';
import { DESCRIPTIONS, PHASE } from '../types';
import { authenticatedUserState, hasHintState, isHintDrawerState, isValidState, roomMemberInfo } from '@/atoms';
import { Preview } from '@/features/preview';
import { HintButton, HintLayout, HintList } from '@/features/hint';
import { VulnerabilitiesLayout, VulnerabilityCheckList } from '@/features/challenge/components';
import { UserBoardsLayout, UserScoreBoard } from '@/features/users';
import { 
  PhaseContentBody,
  PhaseContentFoot,
  PhaseContentForm,
  PhaseContentHead,
  PhaseContentsLayout,
  PhaseLayout, 
} from '../components';
import { IS_HOST_KEY, OPPONENT_NAME_KEY, USER_NAME_KEY } from '@/config/responseKeys';


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

export const AttackPhase= () => {
  const authUser= useRecoilValue( authenticatedUserState );
  const roomMember= useRecoilValue( roomMemberInfo );
  const isDrawerHint= useRecoilValue( isHintDrawerState );

  return (
    <PhaseLayout title='アタックフェーズ'>
      <_PhaseHead >
        <UserBoardsLayout>
          <UserScoreBoard
            userName={ 
              roomMember.host
              ? authUser[ USER_NAME_KEY ]
              : roomMember[ OPPONENT_NAME_KEY ]
            }
            ishost= { true }
          /> 
          <TimerWrapper phase={ PHASE.ATTACK_PHASE } >
            <Timer 
              targetTime = { 302 }
              redirectUrl= { '../defence-phase' }
            />
          </TimerWrapper>
          <UserScoreBoard
            userName={
              roomMember[IS_HOST_KEY]
              ? authUser[USER_NAME_KEY]
              : roomMember[ OPPONENT_NAME_KEY ]
            }
            ishost= { false }
          />
        </UserBoardsLayout>      
      </_PhaseHead>
      <_PhaseContents>
        <Preview codePath = { '1' } />
        <PhaseContentsLayout >
          <PhaseContentHead description={ DESCRIPTIONS.ATTACK_PHASE } />
          <PhaseContentBody >
            <VulnerabilitiesLayout >
              <VulnerabilityCheckList />
            </VulnerabilitiesLayout>
              <HintButton />
              { !isDrawerHint 
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
              id={ 'attack_sendKey' }
              submitFnEndpoint={ ATTACK_SEND_KEY_URL }
            />
          </PhaseContentFoot>
        </PhaseContentsLayout>        
      </_PhaseContents>
    </PhaseLayout>
  );
};