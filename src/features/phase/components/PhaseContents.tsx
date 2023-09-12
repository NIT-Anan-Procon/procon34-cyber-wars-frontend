import styled      from 'styled-components';
import { Preview } from '@/features/preview';

const _PhaseContents= styled.div`
  height : 100%;
  width  : 100%;
  display: flex;
  justify-content: center;
`;

type PhaseContentsProps= {
  phaseTitle: string;
  children  : React.ReactNode;
};

export const PhaseContents= ({ phaseTitle, children }: PhaseContentsProps ) => {
  return (
    <_PhaseContents>
      <Preview 
        phaseTitle={phaseTitle} 
      />
      { children }
    </_PhaseContents>
  );
};