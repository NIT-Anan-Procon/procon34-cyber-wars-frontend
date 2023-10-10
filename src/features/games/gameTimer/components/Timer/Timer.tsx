import styled from 'styled-components';

import { useCountDownTimer } from './hook/countDownTimer';

const _Timer= styled.h1`
  font-size: 4rem;
  color: white;
`;

type TimerProps= {
  targetTime: number;
  redirectUrl: string;
};

export const Timer = ({ targetTime, redirectUrl }: TimerProps) => {
  const { formatCountdown }: any= useCountDownTimer(targetTime, redirectUrl);

  return (
    <_Timer>{ formatCountdown() }</_Timer>
  );
};
