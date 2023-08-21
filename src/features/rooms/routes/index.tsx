import { Route, Routes } from "react-router-dom";
import { RoomSelectForm } from "..";
import { StandBy } from "@/features/standby";

export const RoomSelectRoutes= () => {
  return (
    <Routes>
      <Route path='' element={<RoomSelectForm />} />
      <Route path='standby' element={<StandBy/>} />
    </Routes>
  );
};