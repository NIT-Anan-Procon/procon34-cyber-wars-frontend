import { QueryClient, DefaultOptions, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const queryConfig: DefaultOptions= {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  },
};

export const queryClient: QueryClient = new QueryClient({ defaultOptions: queryConfig });

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<QueryFnType>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
  MutationFnType,
  AxiosError,
  Parameters<MutationFnType>[0]
>;