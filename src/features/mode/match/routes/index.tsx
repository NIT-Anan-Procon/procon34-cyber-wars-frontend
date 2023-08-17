import { NotFound } from "@/features/views";
import { Route, Routes } from "react-router-dom";
import { PHASE_PATH } from "../types";

export const MatchModeRoutes= () => {
  return (
    <Routes>
      <Route path='/' element={<StandBy />} />
      <Route path={`${PHASE_PATH.ATTACK_PHASE_PATH}`} element={<AttackPhase />} />
      <Route path={`${PHASE_PATH.DEFENCE_PHASE_PATH}`} element={<DefencePhase />} />
      <Route path={`${PHASE_PATH.BATTLE_PHASE_PATH}`} element={<BattlePhase />} />
      <Route path={`${PHASE_PATH.EXPLANATION_PHASE_PATH}`} element={<ExplanationPhase />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};