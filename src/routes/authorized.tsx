import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { ModeSelection }= lazyImport(() => import('@/features/modeSelect'), 'ModeSelection');
const { StandByRoutes }= lazyImport(() => import('@/features/standby'), 'StandByRoutes');
const { Settings }= lazyImport(() => import('@/features/users'), 'Settings');

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
      { path: 'match/*',  element: <StandByRoutes /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];