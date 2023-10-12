import { useSetRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { color }          from '@uiw/codemirror-extensions-color';
import { php }            from '@codemirror/lang-php';

import { EditorSetup } from '../config';
import { codeState }   from '../states';

type EditAreaProps= {
  code:string;
  canWrite?: boolean;
};

export const EditArea= ({ code, canWrite }: EditAreaProps) => {
  const setCode =useSetRecoilState( codeState );
  const handleCode= ( value: string ) => {
    setCode(value);
  };
  
  return (
      <CodeMirror
        value     = { code }
        onChange  = { handleCode }
        theme     = { vscodeDark }
        basicSetup= { EditorSetup }
        extensions= {[ color,php() ]}
        readOnly  = { !canWrite }
      />
  );
};