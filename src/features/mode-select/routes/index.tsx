import { Landing, NotFound } from "@/features/views";
import { Route, Routes } from "react-router-dom";
import { ModeSelection } from "./ModeSelection";
import { MATCH_MODE_PATH, TRAIN_MODE_PATH } from "../types";

export const ModeSelectionRoutes= () => {
  return (
    <Routes>
      <Route path='/' element={<ModeSelection />} />
      <Route path={`${TRAIN_MODE_PATH}/*`} element={<Landing/>} />
      <Route path={`${MATCH_MODE_PATH}/*`} element={<NotFound/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}