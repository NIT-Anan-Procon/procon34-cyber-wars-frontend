// import { useEffect } from 'react';

import { AppProvider } from '@/provider/app';
import { AppRoutes } from './routes';

function App() {
  //   useEffect(() => {
  //   const onUnload = (e: BeforeUnloadEvent) => {
  //     e.preventDefault();
  //     e.returnValue = "";
  //   };
  //   window.addEventListener("beforeunload", onUnload);
  //   window.history.pushState(null, '', window.location.href);
  //   window.addEventListener("popstate", () => {
  //     history.go(1);
  //   });
  // });
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
export default App;
