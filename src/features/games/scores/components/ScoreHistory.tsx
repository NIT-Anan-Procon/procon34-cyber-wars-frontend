import { useRecoilValue } from "recoil";

import { CHALLENGE_HINT_SCORE_KEY, ChallengeQueryKey, fetchChallengeFn } from "../../challenge";
import { addScoreState } from "../states/atoms/addScoreState";
import { isCorrectState } from "../states/atoms";
import { isShowHintState } from "../../hint";
import { colors } from "@/assets/styles";
import { fetchRoomInfoFn } from "../../room";
import styled, { css } from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchRoomInfoQueryKey } from '../../room/api/fetchRoomInfo/fetchRoomInfoQueryKey';

const _ScoreHistory= styled.div<{status: string}>`
  height: 8rem;
  width : 15rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width : 100%;
  };
  ${(props) => props.status === 'HOST'
    ? css`
        right: 10%;
        &::before {
          background: black;
          clip-path: polygon(10% 15%, 96% 4%, 90% 88%, 44% 78%, 28% 96%, 36% 73%, 4% 71%);
          z-index: 200;
        };
        &::after {
          background: ${ colors.bgLighter };
          clip-path: polygon(6% 11%, 100% 0%, 94% 96%, 48% 82%, 24% 100%, 32% 77%, 0 75%);
          z-index: 199;
        };
      `
    : css`
        left: 10%;
        &::before {
          background: black;
          clip-path: polygon(4% 4%, 90% 15%, 96% 71%, 64% 73%, 72% 96%, 44% 78%, 10% 88%);
          z-index: 200;
        };
        &::after {
          background: ${ colors.bgLighter };
          clip-path: polygon(0% 0%, 94% 11%, 100% 75%, 68% 77%, 76% 100%, 48% 82%, 6% 92%);
          z-index: 199;
        };
      `
  };

  > span {
    font-size: 2.75rem;
    color: ${ colors.primary };
    z-index: 1000;
  };
`;

export const ScoreHistory=() => {
  const addScore= useRecoilValue( addScoreState );
  const isCorrect= useRecoilValue( isCorrectState );
  const isShowHint= useRecoilValue( isShowHintState );

  const roomInfoQuery= useQuery( fetchRoomInfoQueryKey, fetchRoomInfoFn );
  const challengeQuery= useQuery( ChallengeQueryKey, fetchChallengeFn );

  const myUserStatus= roomInfoQuery?.data?.host ? 'HOST': 'GUEST';

  const point= isCorrect
    ? `+${ addScore }pt`
    : isShowHint 
    ? `${ challengeQuery?.data?.[ CHALLENGE_HINT_SCORE_KEY ]}pt`
    : undefined

  return (
    <>
      <_ScoreHistory status={ myUserStatus } >
            <span >
              { 20 }
            </span>
      </_ScoreHistory>
    </>
  );
};