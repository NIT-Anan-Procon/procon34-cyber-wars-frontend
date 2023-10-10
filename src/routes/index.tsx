import { useRoutes } from 'react-router-dom';

import { authorizedRoutes } from './authorizedRoutes';
import { publicRoutes }     from './publicRoutes';
import { Loading }          from '@/components/Animation';
import { useAuthenticatedUserQuery } from '@/features/auth';

export const AppRoutes = () => {
  const { data, isLoading }= useAuthenticatedUserQuery({});

  if( isLoading ) {
    return <Loading />
  };

  const routes = data?.loggedIn ? authorizedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{ element }</>;
}