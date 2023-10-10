import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { color }          from '@uiw/codemirror-extensions-color';
import { php }            from '@codemirror/lang-php';

import { EditorSetup } from '../config';
import { codeState }   from '../states';
import { RevisionCodeQueryKey, fetchRevisionCodeFn }    from '../api';
import { Loading }     from '@/components/Animation';
import { ChallengeQueryKey, fetchChallengeFn } from '@/features/games/challenge';
import { PHASE } from '../../phases';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

type EditAreaProps= {
  phase: string;
};

export const EditArea= ({ phase }: EditAreaProps) => {
  const [ code, setCode ] =useRecoilState( codeState );
  const challengeQuery= useQuery(ChallengeQueryKey, fetchChallengeFn);
  const revisionCodeQuery= useQuery( RevisionCodeQueryKey, fetchRevisionCodeFn );

  if( challengeQuery.isLoading || revisionCodeQuery.isLoading ) {
    return <Loading />
  };

  if( !challengeQuery?.data || !revisionCodeQuery?.data ) return null;

  useEffect(() => {
    const phaseCode= phase === PHASE.BATTLE_PHASE 
      ? revisionCodeQuery?.data.code
      : challengeQuery?.data.code
    
    setCode( phaseCode );
  },[challengeQuery, revisionCodeQuery, setCode]);

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
      />
  );
};