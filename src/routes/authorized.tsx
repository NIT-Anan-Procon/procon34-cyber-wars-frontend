import { ModeSelection } from '@/features/views';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>d</>
  );
};

export const authorizedRoutes = [
  {
    path: '/cyberwars',
    element: <App />,
    children: [
      { path: '/',                element: <ModeSelection /> },
      // { path: '/training-mode',   element: <TrainingMode /> },
      // { path: '/stand-by',        element: <StandBy /> },
      // { path: '/attack-phase',    element: <AttackPhase /> },
      // { path: '/defence-phase',   element: <DefencePhase /> },
      // { path: '/battle-phase',    element: <BattlePhase /> },
      // { path: '/commentary-mode', element: <CommentaryMode /> },
      // { path: '*',                element: <Navigate to='.' /> },
    ],
  },
];