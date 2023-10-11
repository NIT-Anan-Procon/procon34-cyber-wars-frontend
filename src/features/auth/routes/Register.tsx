import { AuthPageLayout } from '../components/AuthLayout';
import { RegisterForm }   from '../components/RegisterForm';

export const Register= () => {
  return (
    <AuthPageLayout title='Sign up for your account'>
      <RegisterForm />
    </AuthPageLayout>
  );
};