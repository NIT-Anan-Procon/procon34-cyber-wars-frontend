import { useNavigate } from 'react-router-dom';

import { AuthPageLayout }         from '../components/AuthLayout';
import { RegisterForm }           from '../components/RegisterForm';
import { AUTHENTICATED_NAV_PATH } from '..';

export const Register= () => {
  const navigate= useNavigate();

  return (
    <AuthPageLayout title='Sign up for your account'>
      <RegisterForm onSuccess={ () => navigate( AUTHENTICATED_NAV_PATH ) } />
    </AuthPageLayout>
  );
};