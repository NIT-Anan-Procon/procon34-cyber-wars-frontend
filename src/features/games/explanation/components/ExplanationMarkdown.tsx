import ReactMarkdown from 'react-markdown';

import { EXPLANATION_KEY, useFetchExplanationQuery } from '../api';
import styled from 'styled-components';
import { colors } from '@/assets/styles';

const _ExplanationMarkdown= styled.div`
  color: ${ colors.bgLighter };
  font-size: 1.5rem;

  > p {
    line-height: 3.4rem;
    > code {
      height: 100%;
      width: 100%;
      background: ${ colors.bgDarker };
    }    
  }

  > pre {
    margin: 20px 0;
    height: 100%;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background: ${ colors.bgDarker };
    > code {
    
    }   
  }
`;

export const ExplanationMarkdown= () => {
  const explanationQuery= useFetchExplanationQuery({});
  
  if( explanationQuery.isLoading ) {
    return <>loading</>;
  };

  if( !explanationQuery?.data ) return null;

  return (
    <_ExplanationMarkdown>
      <ReactMarkdown >{ explanationQuery?.data?.[ EXPLANATION_KEY ] }</ReactMarkdown>
    </_ExplanationMarkdown>
  );
};