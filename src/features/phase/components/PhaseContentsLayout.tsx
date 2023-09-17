import styled from 'styled-components';

const _PhaseContentsLayout= styled.div`
  grid-column   : 2;
  grid-row      : 3;
  height        : 100%;
  width         : 100%;
  padding       : 20px;
  display       : flex;
  flex-direction: column;
  row-gap       : 2rem;
  background    : #000007;
  font-size     : 1.5rem;
  overflow      : auto;
`;

type PhaseContentsLayoutProps= {
  children: React.ReactNode;
};

export const PhaseContentsLayout= ({ children }: PhaseContentsLayoutProps ) => {
  return (
    <_PhaseContentsLayout>{ children }</_PhaseContentsLayout>
  );
};  