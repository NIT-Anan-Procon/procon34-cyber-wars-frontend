import { Navigate } from 'react-router';

import { lazyImport } from '@/utils/lazyImport';
const { AuthRoutes }= lazyImport(() => import('@/features/auth'), 'AuthRoutes');

export const publicRoutes = [
  { path: 'auth/*', element: <AuthRoutes /> },
  { path: '*',      element: <Navigate to='auth/login' /> },
];