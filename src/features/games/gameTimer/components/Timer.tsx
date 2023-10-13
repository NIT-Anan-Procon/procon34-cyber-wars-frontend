import styled from 'styled-components';

import { useQuery } from '@tanstack/react-query';
import { StartTimeQueryKey, endTimeState, fetchStartTimeFn, useFetchUTCTime } from '..';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { utcTimeState } from '../states/atom/utcTimeState';

const _Timer= styled.h1`
  font-size: 4rem;
  color: white;
`;

type TimerProps= {
  targetTime: number;
  redirectUrl: string;
};

export const Timer = ({ targetTime, redirectUrl }: TimerProps) => {
  const [ countdown, setCountdown ]= useState<number | undefined>(0);
  const [ endCurrentTime, setEndCurrentTime ]= useRecoilState<string>( endTimeState );
  const navigate= useNavigate();
  const { fetchUTCTime }= useFetchUTCTime();
  const startTimeQuery= useQuery( StartTimeQueryKey, fetchStartTimeFn );

  const countdownRef = useRef(countdown);
  countdownRef.current = countdown;

  useEffect(() => {
    if (!startTimeQuery?.data) return;

    const gameStartTime: Date = new Date(endCurrentTime === '' ? startTimeQuery?.data?.startTime : endCurrentTime);
    const milliseconds: number = gameStartTime.getTime();
    const endTime: Date = new Date(new Date(milliseconds + targetTime * 1000));

    const updateCountdown = () => {
      const nowTime: Date = new Date();
      const diffTime = endTime.getTime() - nowTime.getTime() + 5;

      if (diffTime > 0) {
        setCountdown(Math.floor(diffTime / 1000));
      } else {
        setCountdown(0);
        fetchUTCTime();
        clearInterval(timer);
        navigate(redirectUrl);
      }
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [ navigate, redirectUrl, startTimeQuery?.data?.startTime ] )

  const  SECONDS_IN_MINUTE= 60;
  const formatCountdown = (): string | undefined => {
    if (countdown !== undefined ) {  
      let minutes: string | number = Math.floor(countdown / SECONDS_IN_MINUTE);
      let seconds: string | number = countdown % SECONDS_IN_MINUTE;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      return countdown >= 0 ? minutes + ':' + seconds : '00:00';
    }
  }

  return (
    <_Timer>{ formatCountdown() }</_Timer>
  );
};
