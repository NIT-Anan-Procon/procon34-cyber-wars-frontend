import { useQuery } from '@tanstack/react-query';

import { QueryConfig } from '@/lib/react-query';
import { FetchExplanationQueryKey, fetchExplanationFn } from '.';

type UseFetchExplanationOptions= {
  config?: QueryConfig<typeof fetchExplanationFn>;
};

export const useFetchExplanationQuery= ({ config }: UseFetchExplanationOptions ) => {
  return useQuery({
    queryKey: FetchExplanationQueryKey,
    queryFn : fetchExplanationFn,
    ...config
  });
};