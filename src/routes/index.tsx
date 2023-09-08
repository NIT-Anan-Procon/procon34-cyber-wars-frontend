import { useRoutes } from 'react-router-dom';

import { Landing } from '@/features/misc';

import { authorizedRoutes } from './authorizedRoutes';
import { publicRoutes } from './publicRoutes';
import { useRecoilValue } from 'recoil';
import { isAuthState } from '@/atoms';

export const AppRoutes = () => {
  const isAuthenticated= useRecoilValue<boolean>(isAuthState);

  const commonRoutes= [{ path: '/', element: <Landing /> }];
  
  const routes = isAuthenticated ? authorizedRoutes : publicRoutes;
  
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}