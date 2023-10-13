import { PHASE } from '@/features/games/phases';
import { atom } from 'recoil';

export const settingTimeState= atom({
  key: 'atom_settingTime',
  default: {
    [ PHASE.ATTACK_PHASE ] : 60,
    [ PHASE.DEFENCE_PHASE ]: 60,
    [ PHASE.BATTLE_PHASE ] : 60
  }
});