import { atomFamily } from 'recoil';

export const settingTimeState= atomFamily({
  key: 'atomFamily_settingTime',
  default: ( phase: string ) => ( undefined )
});