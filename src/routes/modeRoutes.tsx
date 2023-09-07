import { Explanation } from "@/features/explanation";
import { PhaseRoutes } from "@/features/phase";
import { Result } from "@/features/result";
import { StandBy } from "@/features/standby";
import { Navigate, Route, Routes } from "react-router-dom";

export const TrainRoutes= () => {
  return (
    <></>
  );
};

export const GamesRoutes= () => {
  return (
    <Routes>
      <Route path= { 'standby' }     element={ <StandBy /> } />
      <Route path= { 'phase/*' }     element={ <PhaseRoutes/> } />
      <Route path= { 'result' }      element={ <Result /> } />
      <Route path= { 'explanation' } element={ <Explanation /> } />
      <Route path= {'*'} element={ <Navigate to='' /> } />
    </Routes>
  );
};