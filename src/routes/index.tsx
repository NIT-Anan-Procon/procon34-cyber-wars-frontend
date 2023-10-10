import { useRoutes } from 'react-router-dom';

import { authorizedRoutes } from './authorizedRoutes';
import { publicRoutes }     from './publicRoutes';
import { Loading }          from '@/components/Animation';
import { AuthenticatedUserQueryKey, fetchAuthenticatedUserFn } from '@/features/auth';
import { useQuery } from '@tanstack/react-query';

export const AppRoutes = () => {
  const { data, isLoading }= useQuery( AuthenticatedUserQueryKey, fetchAuthenticatedUserFn )

  if( isLoading ) {
    return <Loading />
  };

  const routes = data?.loggedIn ? authorizedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{ element }</>;
}