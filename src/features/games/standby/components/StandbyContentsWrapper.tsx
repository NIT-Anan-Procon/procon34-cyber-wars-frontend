import styled from 'styled-components';

const _StandbyContentsWrapper= styled.div`
  
`;

type StandbyContentsWrapperProps= {
  
  children: React.ReactNode;
};

export const StandbyContentsWrapper= ({ children }: StandbyContentsWrapperProps ) => {
  return (
    <_StandbyContentsWrapper>{ children }</_StandbyContentsWrapper>
  );
};