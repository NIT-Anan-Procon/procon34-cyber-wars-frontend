import { setupWorker } from 'msw';

import { handlers } from './handlers';
import { io } from 'socket.io-client';

export function startingMocks() {
  const socket= io();

  const worker= setupWorker(...handlers);

  worker.start()
  // worker.start().then(() => {
  //   socket.connect();
  // })

  // worker.on('response', (req, res) => {

  // })
}

