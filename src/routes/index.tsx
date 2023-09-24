import { useRoutes }      from 'react-router-dom';

import { Landing } from '@/features/misc';

import { authorizedRoutes } from './authorizedRoutes';
import { publicRoutes }     from './publicRoutes';
import { AuthenticatedResponseType, IS_LOGGED_IN_KEY, useAuthenticatedUserQuery } from '@/features/auth';


export const AppRoutes = () => {
  // const { data: isAuthenticated }= useAuthenticatedUserQuery({
  //   config: {
  //     select: ( authUser:AuthenticatedResponseType ) => authUser[ IS_LOGGED_IN_KEY ]
  //   }
  // });
  const isAuthenticated= true;

  const commonRoutes= [{ path: '/', element: <Landing /> }];
  
  const routes = isAuthenticated ? authorizedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{ element }</>;
}