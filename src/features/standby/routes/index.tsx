import { Navigate, Route, Routes } from "react-router-dom";
import { PhaseRoutes } from "@/features/phase";
import { StandBy } from "./StandBy";

export const StandByRoutes= () => {
  return (
    <Routes>
      <Route path='' element={ <StandBy /> } />
      <Route path='games/*' element={ <PhaseRoutes /> } />
      <Route path='*' element={ <Navigate to={'.'} /> } />     
    </Routes>
  );
};