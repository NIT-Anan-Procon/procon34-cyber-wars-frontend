import { AppProvider } from '@/provider/app';

function App() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}
export default App;
