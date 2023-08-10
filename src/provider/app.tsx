import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil";

type AppProviderProps = {
  children: React.ReactNode;
}

export const AppProvider= ({children}: AppProviderProps) => {
  return(
    <RecoilRoot>
      <BrowserRouter>{children}</BrowserRouter>      
    </RecoilRoot>
  );
};