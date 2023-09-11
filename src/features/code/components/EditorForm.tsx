import styled from 'styled-components';

import { EditArea } from '.';
import { Form, FormTitle }     from '@/components/Form';
import { Button }   from '@/components/Elements';

const $EditorForm= styled.div`
  height : 100%;
  width  : 100%;
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  background: #000000;
`;

const _EditorHead= styled.div`
  height     : 5.7rem;
  width      : 100%;
  display    : flex;
  align-items: center;
  background : transparent;
`;

const _LanguageLabel= styled.p`
  display    : inline-block;
  line-height: 3rem;
  width      : 5rem;
  font-size  : 1.5rem;
  color      : #b9b9b9;
  text-align : center;
  border     : 2px solid #b9b9b9;
  border-radius: 5px;
`;

const _EditorWrapper= styled.div`
  height : calc(100% - 15rem);
  width  : 100%;
  display: flex;
  background: #1e1e1e;
  border-radius: 5px;
  overflow     : auto;
`;

type EditorFormProps= {
  isHint : boolean;
  navText: string;
};

export const EditorForm= ({ isHint, navText }: EditorFormProps) => {
  return (
    <$EditorForm onSubmit={()=> console.log('')} >
      <_EditorHead>
        <_LanguageLabel>php</_LanguageLabel>
        <h1>{ navText }</h1>
      </_EditorHead>
      <_EditorWrapper>
        <EditArea />
        { isHint 
          ? <></>
          : undefined
        }
      </_EditorWrapper>
      <Button type='submit'>Send</Button>
    </$EditorForm>
  );
};