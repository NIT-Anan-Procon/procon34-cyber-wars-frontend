import { PHASE } from '@/features/phases';
import { atom } from 'recoil';

export const settingTimeState= atom({
  key: 'atom_settingTime',
  default: {
    [ PHASE.ATTACK_PHASE ] : 5,
    [ PHASE.DEFENCE_PHASE ]: 5,
    [ PHASE.BATTLE_PHASE ] : 5
  }
});