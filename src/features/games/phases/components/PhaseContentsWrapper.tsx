import styled from 'styled-components';
import React  from 'react';
import { useRecoilValue } from 'recoil';
import { HintDrawerContent, isHintDrawState } from '@/features/games/hint';
import { GoalDrawerContent, isDrawGoalState } from '@/features/games/goals';
import { colors } from '@/assets/styles';

const _PhaseContentsLayout= styled.div`
  height        : 100%;
  width         : 100%;
  padding       : 20px;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  row-gap       : 1rem;
  font-size     : 1.5rem;
  background: black;
  border-radius: 5px;
`;

const _PhaseContentHead= styled.div`
  height: 5rem;
  width : 100%;
  display: flex;
  align-items: center;

`;

const _PhaseContentBody= styled.div`
  height       : 100%;
  width        : 100%;
  padding      : 20px;
  position     : relative;
  display      : flex;
  align-items  : center;
  justify-content: center;
  background   : ${ colors.bgDarker };
  border-radius: 5px;
  column-gap   : 10px;
`;

const _DrawContent= styled.div`
  height: 100%;
  width : 100%;
  max-width: 40%;
  border-radius: 5px;
  border: 3px solid ${ colors.primary };
  background: ${ colors.bgDarker };
  color:white;
`;

const _PhaseContentFoot= styled.div`
  height     : 10rem;
  width      : 100%;
  padding-right: 20px;
  position   : relative;
  display    : flex;
  align-items: center;
  background : black;
`;

type PhaseContentsLayoutProps= {
  head: React.ReactNode;
  body: React.ReactNode;
  foot: React.ReactNode;
};

export const PhaseContentsWrapper= (
  { 
    head,
    body,
    foot 
  }: PhaseContentsLayoutProps
) => {
  const isDrawGoal= useRecoilValue( isDrawGoalState );
  const isDrawHint= useRecoilValue( isHintDrawState );

  return (
    <_PhaseContentsLayout >
      <_PhaseContentHead >{ head }</_PhaseContentHead>
      <_PhaseContentBody >
        { body }

        { isDrawGoal
          ? < _DrawContent><GoalDrawerContent /></_DrawContent>
          : undefined
        }
        { isDrawHint
          ? < _DrawContent><HintDrawerContent /></_DrawContent>
          : undefined
        }
      </_PhaseContentBody>
      <_PhaseContentFoot >{ foot }</_PhaseContentFoot>
    </_PhaseContentsLayout>
  );
};  