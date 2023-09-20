import styled from 'styled-components';

// import { useCountDownTimer } from './hook/countDownTimer'; // 不要なインポートは削除
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { startTimeState } from '@/atoms/game/startTimeState';
import { useNavigate } from 'react-router-dom';
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
  const { formatCountdown }= useCountDownTimer(targetTime, redirectUrl)

  return (
    <_Timer>{ formatCountdown() }</_Timer>
  );
};
