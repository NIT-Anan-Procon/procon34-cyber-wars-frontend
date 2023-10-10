import { useNavigate } from 'react-router-dom';

import { AuthPageLayout }         from '../components/AuthLayout';
import { LoginForm }              from '../components/LoginForm';
import { AUTHENTICATED_NAV_PATH } from '..';

export const Login= () => {
  const navigate= useNavigate();

  return (
    <AuthPageLayout title='Sign in to your account'>
      <LoginForm onSuccess={ () => navigate( AUTHENTICATED_NAV_PATH ) } />
    </AuthPageLayout>
  );
};