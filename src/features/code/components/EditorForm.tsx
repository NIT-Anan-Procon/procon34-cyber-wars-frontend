import styled from 'styled-components';

import { EditArea } from '.';
import { Button }   from '@/components/Elements';

const $EditorForm= styled.div`
  height : 100%;
  width  : 100%;
  padding: 5px 25px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  background: #000000;
`;

const _EditorHead= styled.div`
  height     : 5.7rem;
  width      : 100%;
  position   : relative;
  display    : flex;
  align-items: center;
  background : transparent;
  justify-content: center;
  column-gap : 10px;
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

const _NavText= styled.h3`
  font-size: 1.5rem;
  color: #e4e4e4;
`;

const _EditorContents= styled.div`
  height    : calc(100% - 15rem);
  width     : 100%;
  position  : relative;
  display   : flex;
  column-gap: 10px;
  overflow  : auto;
`;

const _EditorWrapper= styled.div`
  height       : 100%;
  width        : 100%;
  background   : #1e1e1e;
  border-radius: 5px;
  overflow     : auto;
`;

const _HintButton= styled.button`
  height: 5rem;
  width : 5rem;
  position: absolute;
  bottom: 10px;
  right : 10px;
  border-radius: 50%;
`;

type EditorFormProps= {
  isHint : boolean;
  navText: string;
  phase  : string;
};

export const EditorForm= ({ isHint, navText, phase }: EditorFormProps) => {
  return (
    <$EditorForm onSubmit={()=> console.log('')} >
      <_EditorHead>
        <_LanguageLabel>php</_LanguageLabel>
        <_NavText>{ navText }</_NavText>
      </_EditorHead>
      <_EditorContents>
        <_EditorWrapper>
          <EditArea phase={ phase } />
        </_EditorWrapper>           
        <_HintButton>hint</_HintButton>
          { isHint 
            ? <></>
            : undefined
          }       
      </_EditorContents>
      <Button type='submit'>Send</Button>
    </$EditorForm>
  );
};