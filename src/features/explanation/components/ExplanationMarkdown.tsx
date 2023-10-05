import ReactMarkdown from 'react-markdown';

import { Loading } from '@/components/Animation';
import { useFetchExplanationQuery } from '../api';
import styled from 'styled-components';
import { colors } from '@/assets/styles';

const exampleMarkDown= `
このサイトの脆弱性は、製品検索フィールドに特定のSQLコードを入力することで攻撃が可能です。例えば、ユーザーが \`' OR 1=1 --\` と入力すると、SQL文は \`SELECT name, price FROM products WHERE name = '' OR 1=1 --\` となり、すべての商品が返されます。この \`1=1\` の部分は常に真であり、 \`--\` は以降のコードをコメントアウトします。

この脆弱性を修正するためには、ユーザーからの入力をそのままSQL文に挿入しないことが必要です。代わりに、プリペアドステートメント（パラメータ化されたクエリ）を使用することで、ユーザー入力をSQL文から分離し、SQLインジェクションを防ぐことができます。

修正後のコードは以下のようになります：

\`\`\`php
$keyword = $_GET['search'];
$stmt = $pdo->prepare('SELECT name, price FROM products WHERE name = :keyword');
$stmt->execute(['keyword' => $keyword]);
$data = $stmt->fetchAll();
\`\`\`

このコードでは、\`:keyword\` はプレースホルダで、\`execute\` メソッドの呼び出し時にユーザー入力で置き換えられます。これにより、ユーザー入力が直接SQL文に挿入されることはありません。
`;

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
    return <Loading />;
  };

  if( !explanationQuery?.data ) return null;

  return (
    <_ExplanationMarkdown>
      <ReactMarkdown >{ exampleMarkDown }</ReactMarkdown>
    </_ExplanationMarkdown>
  );
};