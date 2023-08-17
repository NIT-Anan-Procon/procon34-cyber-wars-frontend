import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import { NotFound } from '@/features/views';
import { MatchModeRoutes } from '@/features/mode';

const { ModeSelectionRoutes } = lazyImport(() => import('@/features/mode-select'), 'ModeSelectionRoutes');

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>} >
      <Outlet />
    </Suspense>
  );
};

export const authorizedRoutes = [
  {
    path: '/cyberwars',
    element: <App />,
    children: [
      { path: '',  element: <ModeSelectionRoutes /> },
      { path: 'match/*', element: <MatchModeRoutes /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];