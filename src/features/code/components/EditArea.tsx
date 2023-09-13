import CodeMirror             from '@uiw/react-codemirror';
import { vscodeDark }         from '@uiw/codemirror-theme-vscode';
import { color }              from '@uiw/codemirror-extensions-color';
import { php }                from '@codemirror/lang-php';
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { updateCodeSelector } from '../selector/updateCodeSelector';

type EditAreaProps= {
  phase: string;
};

export const EditArea= ({ phase }: EditAreaProps) => {
  const [ value, updateValue ] =useAtomValueChange( updateCodeSelector( phase ) );

  return (
    <CodeMirror
      value     = { value }
      onChange  = { updateValue }
      theme     = { vscodeDark }
      extensions= {[ 
        color,
        php()
      ]}
    />
  );
};