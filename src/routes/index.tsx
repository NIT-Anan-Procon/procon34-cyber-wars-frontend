import { useRoutes } from 'react-router-dom';

import { Landing } from '@/features/views';

import { authorizedRoutes } from './authorized';
import { publicRoutes } from './public';
import { useRecoilValue } from 'recoil';
import { isAuthState } from '@/atoms';

export const AppRoutes = () => {
  const isAuthenticated= useRecoilValue<boolean>(isAuthState);

  const commonRoutes= [{ path: '/', element: <Landing /> }];
  
  const routes = isAuthenticated ? authorizedRoutes : publicRoutes;
  
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}