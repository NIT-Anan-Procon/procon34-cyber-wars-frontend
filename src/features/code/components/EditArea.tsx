import CodeMirror             from '@uiw/react-codemirror';
import { vscodeDark }         from '@uiw/codemirror-theme-vscode';
import { color }              from '@uiw/codemirror-extensions-color';
import { php }                from '@codemirror/lang-php';
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { updateCodeSelector } from '../selector/updateCodeSelector';

export const EditArea= () => {
  const [ value, updateValue ] =useAtomValueChange( updateCodeSelector );

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