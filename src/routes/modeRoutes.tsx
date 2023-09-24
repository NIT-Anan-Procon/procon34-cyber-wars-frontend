import { Navigate, Route, Routes } from "react-router-dom";

import { StandBy } from "@/features/standby";
import { PhaseRoutes } from "@/features/phases";
import { Result } from "@/features/result";
import { Explanation } from "@/features/explanation";

export const TrainRoutes= () => {
  return (
    <Routes>
      
    </Routes>
  );
};

export const GamesRoutes= () => {
  return (
    <Routes>
      <Route path= { 'standby' }     element={ <StandBy /> } />
      <Route path= { 'phase/*' }     element={ <PhaseRoutes/> } />
      {/* 
      <Route path= { 'result' }      element={ <Result /> } />
      <Route path= { 'explanation' } element={ <Explanation /> } /> */}
      <Route path= { '*' }           element={ <Navigate to='' /> } />
    </Routes>
  );
};