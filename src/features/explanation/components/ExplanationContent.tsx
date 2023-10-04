import { Loading } from '@/components/Animation';
import { useFetchExplanationQuery } from '../api';

type ExplanationContentProps= {
  children: React.ReactNode;
}

export const ExplanationContent= ({ children }: ExplanationContentProps) => {
  const explanationQuery= useFetchExplanationQuery({});
  
  if( explanationQuery.isLoading ) {
    return <Loading />;
  };

  if( !explanationQuery?.data ) return null;

  return (
    <>{ children }</>
  );
};