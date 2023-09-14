import { useRecoilState }     from 'recoil';
import CodeMirror             from '@uiw/react-codemirror';
import { vscodeDark }         from '@uiw/codemirror-theme-vscode';
import { color }              from '@uiw/codemirror-extensions-color';
import { php }                from '@codemirror/lang-php';

import { updateCodeSelector } from '../selector/updateCodeSelector';

type EditAreaProps= {
  phase: string;
};

export const EditArea= ({ phase }: EditAreaProps) => {
  const [ code, setCode ] =useRecoilState( updateCodeSelector( phase ) );

  const handleCode= (value: string) => {
    setCode(value);
  };

  return (
    <CodeMirror
      value     = { code }
      onChange  = { handleCode }
      theme     = { vscodeDark }
      extensions= {[ 
        color,
        php()
      ]}
    />
  );
};