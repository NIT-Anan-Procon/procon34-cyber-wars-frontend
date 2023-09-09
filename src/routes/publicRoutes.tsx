import { lazyImport } from "@/utils/lazyImport";
import { Navigate } from "react-router";

const { AuthRoutes }= lazyImport(() => import('@/features/auth'), 'AuthRoutes');

export const publicRoutes = [
  { path: 'auth/*', element: <AuthRoutes /> },
  { path: '*', element: <Navigate to='auth/sign-in' /> },
];