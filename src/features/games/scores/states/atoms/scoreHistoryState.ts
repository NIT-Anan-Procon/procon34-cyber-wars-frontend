import { atom } from 'recoil';

type ScoreHistoryProps= {
  score   : number;
  status  : string;
  message?: string;
};

export const scoreHistoryState= atom<ScoreHistoryProps>({
  key: 'atom_scoreHistory',
  default: {
    score  : 0,
    status : '',
    message: ''
  }
});