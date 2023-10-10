import { Spinner } from '@/components/Elements';
import { CHALLENGE_CHOICES_KEY, useFetchChallengeQuery } from '../../challenge';
import { useTransChoicesData } from '../hook/useTransChoicesData';
import { ChoicesInputFieldWrapper } from '.';
import styled from 'styled-components';
import { ChoiceList } from './ChoiceList';

const _ChoicesWrapper= styled.div`
  padding-top: 10px;
  height         : calc(100% - 8rem);
  width          : 50vw;
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  row-gap        : 3rem;
  background     : transparent;
`;

const _ChoicesWrapperHead= styled.div`
  height: 5rem;
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  background: transparent;
`;

const _ChoicesWrapperBody= styled.div`
  height         : calc( 100% - 5rem);
  width          : 100%;
  padding        : 20px;
  position       : relative;
  background     : black;
  border-radius  : 5px;
  overflow-y     : auto;
`;

type ChoicesWrapperProps= {
  children?: React.ReactNode;
};

export const ChoicesWrapper= ({ children }: ChoicesWrapperProps ) => {
  const transChoicesData= useTransChoicesData();

  const { data: choices, isLoading }= useFetchChallengeQuery({
    config: {
      select: ( challenge ) => transChoicesData( challenge[ CHALLENGE_CHOICES_KEY ])
    }
  });

  if( isLoading ) {
    return <Spinner />
  };

  if( !choices ) { return null };

  return (
    <_ChoicesWrapper >
      <_ChoicesWrapperHead >
        <ChoicesInputFieldWrapper />
      </_ChoicesWrapperHead>
      <_ChoicesWrapperBody ><ChoiceList item={choices} /></_ChoicesWrapperBody>
    </_ChoicesWrapper>
  );
};