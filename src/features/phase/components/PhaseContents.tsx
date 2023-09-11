import styled      from 'styled-components';
import { Preview } from '@/features/preview';

const _PreviewPos= `
  grid-column: 1;
  grid-row   : 3;
`;

const _ContentPos= styled.div`
  grid-column   : 2;
  grid-row      : 3;
`;

type PhaseContentsProps= {
  phaseTitle: string;
  children  : React.ReactNode;
};

export const PhaseContents= ({ phaseTitle, children }: PhaseContentsProps ) => {
  return (
    <>
      <Preview 
        phaseTitle={phaseTitle} 
        styles={_PreviewPos} 
      />
      <_ContentPos>{ children }</_ContentPos>
    </>
  );
};