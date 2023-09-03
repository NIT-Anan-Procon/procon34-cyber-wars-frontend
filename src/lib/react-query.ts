import { QueryClient, DefaultOptions } from '@tanstack/react-query';

const queryConfig: DefaultOptions= {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient: QueryClient = new QueryClient({ defaultOptions: queryConfig });