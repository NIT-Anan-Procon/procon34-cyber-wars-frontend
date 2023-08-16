import { Landing, NotFound } from "@/features/views";
import { Route, Routes } from "react-router-dom";
import { ModeSelection } from "./modeSelection";

export const ModeSelectionRoutes= () => {
  return (
    <Routes>
      <Route path='/' element={<ModeSelection />} />
      <Route path='/train/*' element={<Landing/>} />
      <Route path='/match/*' element={<NotFound/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}