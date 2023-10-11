import { AuthPageLayout } from '../components/AuthLayout';
import { LoginForm }      from '../components/LoginForm';

export const Login= () => {

  return (
    <AuthPageLayout title='Sign in to your account'>
      <LoginForm />
    </AuthPageLayout>
  );
};