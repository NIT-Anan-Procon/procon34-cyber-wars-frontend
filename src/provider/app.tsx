import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import { Suspense } from 'react';
import { AuthProvider } from './authProvider';
import { HelmetProvider } from 'react-helmet-async';

type AppProviderProps = {
  children: React.ReactNode;
}

export const AppProvider= ({children}: AppProviderProps) => {
  return(      
    <HelmetProvider>
      <RecoilRoot>
        <Suspense fallback={<div>loading</div>}>
          <AuthProvider>
            <Router>{children}</Router>            
          </AuthProvider>
        </Suspense>        
      </RecoilRoot>         
    </HelmetProvider>
  );
};