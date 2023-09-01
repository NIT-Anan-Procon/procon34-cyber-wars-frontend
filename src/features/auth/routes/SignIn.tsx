import { useNavigate } from 'react-router-dom';

import { AuthPageLayout } from '../components/AuthPageLayout';
import { SignInForm } from '../components/SignInForm';

export const SignIn= () => {
  const navigate= useNavigate();

  return (
    <AuthPageLayout title='Sign in to your account'>
      <SignInForm onSuccess={() => navigate('../../cyberwars')} />
    </AuthPageLayout>
  );
};