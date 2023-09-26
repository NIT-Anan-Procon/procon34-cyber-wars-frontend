import { useRecoilState } from 'recoil';
import styled             from 'styled-components';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { color }          from '@uiw/codemirror-extensions-color';
import { php }            from '@codemirror/lang-php';

import { updateCodeSelector } from '../states/selector/updateCodeSelector';
import { EditorSetup }        from '../config';
import { codeState } from '../states';
import { CODE_KEY, useFetchCodeQuery } from '../api';


const _EditorWrapper= styled.div`
  height       : 100%;
  width        : 100%;
  background   : #1e1e1e;
  border-radius: 5px;
  overflow     : auto;
  font-size    : 1.2rem;
`;

type EditAreaProps= {
  phase: string;
};

export const EditArea= ({ phase }: EditAreaProps) => {
  const [ code, setCode ] =useRecoilState(codeState );
  const codeQuery= useFetchCodeQuery();

  const handleCode= (value: string) => {
    setCode(value);
  };
  if( codeQuery.isLoading ) return <>loading</>

  if( !codeQuery?.data ) return null;
  
  return (
    <_EditorWrapper>
      <CodeMirror
        value     = { codeQuery?.data[ CODE_KEY ] }
        onChange  = { handleCode }
        theme     = { vscodeDark }
        basicSetup= { EditorSetup }
        extensions= {[ 
          color,
          php()
        ]}
      />
    </_EditorWrapper>
  );
};