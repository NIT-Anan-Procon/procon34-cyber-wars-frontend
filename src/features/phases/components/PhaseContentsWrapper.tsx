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

const _PhaseContentFoot= styled.div`
  height    : 10rem;
  width     : 100%;
  position  : relative;
  bottom    : 0;
  background: #010007;
  border-top: 2px solid grey;
`;

type PhaseContentsLayoutProps= {
  children: React.ReactNode;
};

export const PhaseContentsWrapper= ({ children }: PhaseContentsLayoutProps ) => {
  return (
    <_PhaseContentsLayout>
      <_PhaseContentHead>
        <_LanguageLabel> php </_LanguageLabel>
        <_HeadDescription>{ 'description '}</_HeadDescription>
      </_PhaseContentHead>

      <_PhaseContentBody >{ children }</_PhaseContentBody>

      
      <_PhaseContentFoot></_PhaseContentFoot>
    </_PhaseContentsLayout>
  );
};  