import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { startingMocks } from '@/mocks/browser';

type AppProviderProps = {
  children: React.ReactNode;
}

export const AppProvider= ({children}: AppProviderProps) => {
  if (process.env.NODE_ENV === 'development') {
    startingMocks();
  }

  return(      
    <HelmetProvider>
      <RecoilRoot>
        <Suspense fallback={<div>loading</div>}>
          <Router>{children}</Router>            
        </Suspense>        
      </RecoilRoot>         
    </HelmetProvider>
  );
};