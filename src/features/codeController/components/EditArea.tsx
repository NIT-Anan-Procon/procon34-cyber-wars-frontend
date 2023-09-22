import { useRecoilState } from 'recoil';
import styled             from 'styled-components';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { color }          from '@uiw/codemirror-extensions-color';
import { php }            from '@codemirror/lang-php';

import { updateCodeSelector } from '../selector/updateCodeSelector';


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
  const [ code, setCode ] =useRecoilState( updateCodeSelector(phase) );

  const handleCode= (value: string) => {
    setCode(value);
  };

  
  return (
    <_EditorWrapper>
      <CodeMirror
        value     = { code }
        onChange  = { handleCode }
        theme     = { vscodeDark }
        extensions= {[ 
          color,
          php()
        ]}
      />
    </_EditorWrapper>
  );
};