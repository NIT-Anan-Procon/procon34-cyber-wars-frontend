import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';
import { NotFound } from '@/features/views';

const { ModeSelectionRoutes } = lazyImport(() => import('@/features/mode-select'), 'ModeSelectionRoutes');

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Outlet />
    </Suspense>
  );
};

export const authorizedRoutes = [
  {
    path: '/cyberwars',
    element: <App />,
    children: [
      { path: '', element: <ModeSelectionRoutes /> },
      // { path: '/training-mode/*',   element: <TrainingMode /> },
      // { path: '/stand-by',        element: <StandBy /> },
      // { path: '/attack-phase',    element: <AttackPhase /> },
      // { path: '/defence-phase',   element: <DefencePhase /> },
      // { path: '/battle-phase',    element: <BattlePhase /> },
      // { path: '/commentary-mode', element: <CommentaryMode /> },
      { path: '*',                element: <NotFound /> },
    ],
  },
];