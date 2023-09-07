import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { ModeSelection }= lazyImport(() => import('@/features/modeSelect'), 'ModeSelection');
const { GamesRoutes }= lazyImport(() => import('./modeRoutes'), 'GamesRoutes');
const { Settings }     = lazyImport(() => import('@/features/users'), 'Settings');

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>} >
      <Outlet />
    </Suspense>
  );
};

export const authorizedRoutes = [
  {
    path: 'cyberwars',
    element: <App />,
    children: [
      { path: '',  element: <ModeSelection /> },
      { path: 'settings', element: <Settings/>},
      { path: 'train/*',  element: <></> },
      { path: 'games/*',  element: <GamesRoutes /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];