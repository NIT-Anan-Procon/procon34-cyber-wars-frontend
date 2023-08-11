import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil";
import { Suspense } from 'react';

type AppProviderProps = {
  children: React.ReactNode;
}

export const AppProvider= ({children}: AppProviderProps) => {
  return(
    <Suspense fallback={<div>loading</div>}>
      <RecoilRoot>
        <BrowserRouter>{children}</BrowserRouter>      
      </RecoilRoot>      
    </Suspense>
  );
};