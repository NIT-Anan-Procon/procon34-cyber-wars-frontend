import { useNavigate } from 'react-router-dom';

import { AuthPageLayout }         from '../components/AuthPageLayout';
import { SignUpForm }             from '../components/SignUpForm';
import { AUTHENTICATED_NAV_PATH } from '..';

export const SignUp= () => {
  const navigate= useNavigate();

  return (
    <AuthPageLayout title='Sign up for your account'>
      <SignUpForm onSuccess={ () => navigate( AUTHENTICATED_NAV_PATH ) } />
    </AuthPageLayout>
  );
};