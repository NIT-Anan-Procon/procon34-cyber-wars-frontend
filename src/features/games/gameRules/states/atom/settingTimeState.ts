import { atom } from 'recoil';

export const settingTimeState= atom({
  key: 'atom_settingTime',
  default: {
    attackPhase : 60,
    defencePhase: 60,
    battlePhase : 60
  }
});