import { useNavigate } from 'react-router-dom';

import { ContentLayout }      from '@/components/Layout';
import { Button }             from '@/components/Elements';
import { ExplanationContent } from '../components';

export const Explanation= () => {
  const navigate= useNavigate();

  return (
    <ContentLayout
      headTitle= { '解説画面' }
      header   = { '解説' }
    >
      <ExplanationContent>
        
      </ExplanationContent>
      <Button type='button' onClick={() => navigate('../../')}>モード選択へ戻る</Button>      
    </ContentLayout>
  );
};