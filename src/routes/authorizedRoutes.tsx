import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import { Loading } from '@/components/Animation';

const { TrainRoutes }  = lazyImport(() => import('./modeRoutes'), 'TrainRoutes');
const { GamesRoutes }  = lazyImport(() => import('./modeRoutes'), 'GamesRoutes');
const { ModeSelection }= lazyImport(() => import('@/features/modeSelect'), 'ModeSelection');

const App = () => {
  return (
    <Suspense fallback={<Loading />} >
      <Outlet />
    </Suspense>
  );
};

export const authorizedRoutes = [
  {
    path: '',
    element: <App />,
    children: [
      { path: '',        element: <ModeSelection /> },
      { path: 'train/*', element: <TrainRoutes /> },
      { path: 'games/*', element: <GamesRoutes /> },
      { path: '*',       element: <Navigate to="." /> },
    ],
  },
];