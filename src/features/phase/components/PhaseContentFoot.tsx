import styled from 'styled-components';

const _PhaseContentFoot= styled.div`
  height    : 10rem;
  width     : 100%;
  position  : relative;
  bottom    : 0;
  background: #010007;
  border-top: 2px solid grey;
`;

type PhaseContentFootProps= {
  children: React.ReactNode;
};

export const PhaseContentFoot= ({ children }: PhaseContentFootProps) => {
  return (
    <_PhaseContentFoot>{ children }</_PhaseContentFoot>
  );
};