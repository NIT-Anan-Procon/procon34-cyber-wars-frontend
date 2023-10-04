import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { worker } from '@/mocks/browser';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/react-query';
import { Loading } from '@/components/Animation';

type AppProviderProps = {
  children: React.ReactNode;
}

export const AppProvider= ({children}: AppProviderProps) => {
  if (process.env.NODE_ENV === 'development') {
    worker.start();
  }

  return(
    <React.Suspense fallback={<Loading />} >
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {/* {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />} */}
          <RecoilRoot>
            <Suspense fallback={<Loading />}>
              <Router>{children}</Router>            
            </Suspense>        
          </RecoilRoot>          
        </QueryClientProvider>
      </HelmetProvider>
    </React.Suspense>
  );
};