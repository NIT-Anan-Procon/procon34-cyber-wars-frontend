import styled from 'styled-components';

const _PhaseContentHead= styled.div`
  height     : 6rem;
  width      : 100%;
  position   : relative;
  display    : flex;
  align-items: center;
  background : transparent;
  justify-content: center;
  border-bottom: 2px solid grey;
`;

const _LanguageLabel= styled.p`
  position   : absolute;
  left       : 20px;
  display    : inline-block;
  line-height: 3rem;
  width      : 5rem;
  font-size  : 1.5rem;
  color      : #b9b9b9;
  text-align : center;
  border     : 2px solid #b9b9b9;
  border-radius: 5px;
`;

const _HeadDescription= styled.h3`
  font-size: 1.5rem;
  color: #e4e4e4;
`;

type PhaseContentHead= {
  description: string;
};

export const PhaseContentHead= ({ description }: PhaseContentHead ) => {
  return (
    <_PhaseContentHead>
      <_LanguageLabel> php </_LanguageLabel>
      <_HeadDescription>{ description }</_HeadDescription>
    </_PhaseContentHead>
  );
};