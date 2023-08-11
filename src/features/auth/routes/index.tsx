import { Route, Routes } from 'react-router-dom';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const AuthRoutes= () => {
  return(
    <Routes>
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
    </Routes>
  );
};