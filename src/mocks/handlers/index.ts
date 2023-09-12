import { userHandlers } from './user';
import { roomHandlers } from './room';
import { 
  attackPhaseHandler, 
  battlePhaseHandler, 
  defencePhaseHandler, 
  gameHandlers 
} from './game';

export const handlers= [
  ...userHandlers,
  ...roomHandlers,
  ...gameHandlers,
  ...attackPhaseHandler,
  ...defencePhaseHandler,
  ...battlePhaseHandler,
];