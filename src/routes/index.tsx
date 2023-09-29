import { useRoutes }      from 'react-router-dom';

import { Landing } from '@/features/misc';

import { authorizedRoutes } from './authorizedRoutes';
import { publicRoutes }     from './publicRoutes';
import { AuthenticatedResponseType, IS_LOGGED_IN_KEY, useAuthenticatedUserQuery } from '@/features/auth';
import { ModeSelection } from '@/features/modeSelect';


export const AppRoutes = () => {
  const { data: isAuthenticated, isLoading }= useAuthenticatedUserQuery({
    config: {
      select: ( authUser:AuthenticatedResponseType ) => authUser[ IS_LOGGED_IN_KEY ]
    }
  });

  if( isLoading ) {
    return <>loading</>
  };

  const routes = isAuthenticated ? authorizedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{ element }</>;
}