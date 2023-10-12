import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { color }          from '@uiw/codemirror-extensions-color';
import { php }            from '@codemirror/lang-php';

import { EditorSetup } from '../config';
import { codeState }   from '../states';
import { useEffect } from 'react';

type EditAreaProps= {
  fetchedCode:string;
  canWrite?: boolean;
};

export const EditArea= ({ fetchedCode, canWrite }: EditAreaProps) => {
  const [ code, setCode ] =useRecoilState( codeState );

  useEffect(() => {
    setCode( fetchedCode );
  },[ fetchedCode, setCode ]);

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