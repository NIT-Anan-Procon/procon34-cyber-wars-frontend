import { atom } from 'recoil';

type MessageTypes= {
  message: string;
  status : string;
};

export const messageState= atom<MessageTypes>({
  key: 'atom_messageState',
  default: {
    message: '',
    status : ''
  }
});