import React, { Suspense }     from 'react';
import { RecoilRoot }          from 'recoil';
import { BrowserRouter }       from 'react-router-dom';
import { HelmetProvider }      from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools }  from '@tanstack/react-query-devtools';

// import { worker }      from '@/mocks/browser';
import { queryClient } from '@/lib/react-query';
import { Loading }     from '@/components/Animation';

type AppProviderProps= {
  children: React.ReactNode;
};

export const AppProvider= ({ children }: AppProviderProps) => {
  // if ( process.env.NODE_ENV === 'development' ) {
  //   worker.start();
  // };

  return(
    <React.Suspense fallback={<Loading />} >
      <HelmetProvider >
        <QueryClientProvider client={ queryClient } >
          { process.env.NODE_ENV !== 'development' && <ReactQueryDevtools /> }
          <RecoilRoot >
            <Suspense fallback={<Loading />} >
              <BrowserRouter >{ children }</BrowserRouter>            
            </Suspense>        
          </RecoilRoot>          
        </QueryClientProvider>
      </HelmetProvider>
    </React.Suspense>
  );
};