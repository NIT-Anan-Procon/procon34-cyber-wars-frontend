import { Navigate, Route, Routes } from "react-router-dom";
import { AttackPhase }  from "./AttackPhase";
import { DefencePhase } from "./DefencePhase";
import { BattlePhase }  from "./BattlePhase";

export const PhaseRoutes= () => {
  return (
    <Routes>
      <Route path='attack-phase'  element={ <AttackPhase /> } />
      <Route path='defence-phase' element={ <DefencePhase /> } />
      <Route path='battle-phase'  element={ <BattlePhase /> } />
      <Route path='*' element={ <Navigate to='' /> } />
    </Routes>
  );
};