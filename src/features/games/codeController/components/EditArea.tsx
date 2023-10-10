import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { color }          from '@uiw/codemirror-extensions-color';
import { php }            from '@codemirror/lang-php';

import { EditorSetup } from '../config';
import { codeState }   from '../states';
import { CODE_KEY, REVISION_CODE_KEY, useFetchRevisionCodeQuery }    from '../api';
import { Loading }     from '@/components/Animation';
import { CHALLENGE_CODE_KEY, useFetchChallengeQuery } from '@/features/games/challenge';
import { PHASE } from '../../phases';

type EditAreaProps= {
  phase: string;
};

export const EditArea= ({ phase }: EditAreaProps) => {
  const [ code, setCode ] =useRecoilState(codeState );
  const challengeQuery= useFetchChallengeQuery({});
  const revisionCodeQuery= useFetchRevisionCodeQuery();

  if( challengeQuery.isLoading || revisionCodeQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data || !revisionCodeQuery?.data ) return null;

    const phaseCode= phase === PHASE.BATTLE_PHASE 
      ? revisionCodeQuery?.data[ REVISION_CODE_KEY ]
      : challengeQuery?.data[ CHALLENGE_CODE_KEY ]

  const handleCode= ( value: string ) => {
    setCode(value);
  };
  
  return (
      <CodeMirror
        value     = { phaseCode }
        onChange  = { handleCode }
        theme     = { vscodeDark }
        basicSetup= { EditorSetup }
        extensions= {[ color,php() ]}
      />
  );
};