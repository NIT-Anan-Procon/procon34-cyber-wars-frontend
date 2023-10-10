import { useRoutes } from 'react-router-dom';

import { authorizedRoutes } from './authorizedRoutes';
import { publicRoutes }     from './publicRoutes';
import { Loading }          from '@/components/Animation';
import { 
  AuthenticatedResponseType,
  IS_LOGGED_IN_KEY,
  useAuthenticatedUserQuery
} from '@/features/auth';

export const AppRoutes = () => {
  const { data: isAuthenticated, isLoading }= useAuthenticatedUserQuery({
    config: {
      select: ( authUser: AuthenticatedResponseType ) => authUser[ IS_LOGGED_IN_KEY ]
    }
  });

  if( isLoading ) {
    return <Loading />
  };

  const routes = isAuthenticated ? authorizedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{ element }</>;
}