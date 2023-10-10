import { Navigate, Route, Routes } from 'react-router-dom';

import { StandBy }     from '@/features/games/standby';
import { PhaseRoutes } from '@/features/games/phases';
import { Result }      from '@/features/games/result';
import { Explanation } from '@/features/games/explanation';
import { Training }    from '@/features/training';

export const TrainRoutes= () => {
  return (
    <Routes>
      <Route path= { '' }  element={ <Training /> } />
      <Route path= { '*' } element={ <Navigate to='' /> } />
    </Routes>
  );
};

export const GamesRoutes= () => {
  return (
    <Routes>
      <Route path= { 'standby' }     element={ <StandBy /> } />
      <Route path= { 'phase/*' }     element={ <PhaseRoutes/> } /> 
      <Route path= { 'result' }      element={ <Result /> } />
      <Route path= { 'explanation' } element={ <Explanation /> } />
      <Route path= { '*' }           element={ <Navigate to='' /> } />
    </Routes>
  );
};