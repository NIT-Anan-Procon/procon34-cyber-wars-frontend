import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { color }          from '@uiw/codemirror-extensions-color';
import { php }            from '@codemirror/lang-php';

import { EditorSetup } from '../config';
import { codeState }   from '../states';
import { CODE_KEY, useFetchCodeQuery } from '../api';
import { Loading } from '@/components/Animation';

type EditAreaProps= {
  phase: string;
};

export const EditArea= ({ phase }: EditAreaProps) => {
  const [ code, setCode ] =useRecoilState(codeState );
  const codeQuery= useFetchCodeQuery();

  const handleCode= (value: string) => {
    setCode(value);
  };
  if( codeQuery.isLoading ) {
    return <Loading />
  };

  if( !codeQuery?.data ) return null;
  
  return (
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
  );
};