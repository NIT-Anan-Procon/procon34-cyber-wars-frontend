import { QueryClient, DefaultOptions } from '@tanstack/react-query';

const queryConfig: DefaultOptions= {
  queries: {
    refetchOnWindowFocus: false,
  },
};

export const queryClient: QueryClient = new QueryClient({defaultOptions: queryConfig});