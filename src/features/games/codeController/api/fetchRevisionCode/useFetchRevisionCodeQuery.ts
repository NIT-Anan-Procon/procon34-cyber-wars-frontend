import { useQuery } from '@tanstack/react-query';

import { RevisionCodeQueryKey } from './fetchRevisionCodeQueryKey';
import { fetchRevisionCodeFn }  from './fetchRevisionCodeFn';

export const useFetchRevisionCodeQuery= () => {
  return useQuery({
    queryKey: RevisionCodeQueryKey,
    queryFn : fetchRevisionCodeFn
  });
};