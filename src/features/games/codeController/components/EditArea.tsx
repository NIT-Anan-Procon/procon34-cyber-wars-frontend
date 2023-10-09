import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { color }          from '@uiw/codemirror-extensions-color';
import { php }            from '@codemirror/lang-php';

import { EditorSetup } from '../config';
import { codeState }   from '../states';
import { CODE_KEY }    from '../api';
import { Loading }     from '@/components/Animation';
import { useFetchChallengeQuery } from '@/features/games/challenge';

type EditAreaProps= {
  phase: string;
};

export const EditArea= ({ phase }: EditAreaProps) => {
  const [ code, setCode ] =useRecoilState(codeState );
  const challengeQuery= useFetchChallengeQuery({});

  if( challengeQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data ) return null;

  const handleCode= ( value: string ) => {
    setCode(value);
  };
  
  return (
      <CodeMirror
        value     = { challengeQuery?.data[ CODE_KEY ] }
        onChange  = { handleCode }
        theme     = { vscodeDark }
        basicSetup= { EditorSetup }
        extensions= {[ color,php() ]}
      />
  );
};