import styled from 'styled-components';

const _PhaseContentBody= styled.div`
  height       : 100%;
  width        : 100%;
  position     : relative;
  display      : flex;
  column-gap   : 10px;
  background   : #000007;
  border-radius: 5px;
  overflow     : auto;
`;

type PhaseContentBodyProps= {
  children: React.ReactNode;
};

export const PhaseContentBody= ({ children }: PhaseContentBodyProps) => {
  return (
    <_PhaseContentBody>{ children }</_PhaseContentBody>
  );
};