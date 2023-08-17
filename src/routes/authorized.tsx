import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import { NotFound } from '@/features/views';

const { ModeSelection }= lazyImport(() => import('@/features/mode-select'), 'ModeSelection');
const { MatchModeRoutes }= lazyImport(() => import('@/features/mode'), 'MatchModeRoutes');

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
      { path: 'match/*', element: <MatchModeRoutes /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];