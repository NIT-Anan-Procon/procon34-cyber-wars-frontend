import { AxiosError, AxiosResponse } from 'axios';
import { 
  QueryClient,
  DefaultOptions,
  UseQueryOptions,
  UseMutationOptions
} from '@tanstack/react-query';

const queryConfig: DefaultOptions= {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    cacheTime: 0
  },
};

export const queryClient: QueryClient = new QueryClient({ defaultOptions: queryConfig });

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ReturnType<QueryFnType>, unknown, ReturnType<QueryFnType>, string[] >,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> = Omit<
  UseMutationOptions<
    AxiosResponse<ReturnType<MutationFnType>>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >,
  "mutationFn"
>;