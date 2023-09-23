import { useRoutes }      from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Landing } from '@/features/misc';

import { authorizedRoutes } from './authorizedRoutes';
import { publicRoutes }     from './publicRoutes';
import { IS_LOGGED_IN_KEY, useAuthenticatedUserQuery } from '@/features/auth';


export const AppRoutes = () => {
  const { data: isAuthenticated }= useAuthenticatedUserQuery({
    config: {
      select: ( authUser ) => authUser[ IS_LOGGED_IN_KEY ]
    }
  });

  const commonRoutes= [{ path: '/', element: <Landing /> }];
  
  const routes = isAuthenticated ? authorizedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{ element }</>;
}