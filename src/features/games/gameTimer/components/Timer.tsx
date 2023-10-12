import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { StartTimeQueryKey, fetchStartTimeFn } from '..';

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
  const navigate= useNavigate();
  const startTimeQuery= useQuery( StartTimeQueryKey, fetchStartTimeFn, 
    {
      refetchOnMount: true
    }
  );
  const countdownRef = useRef(countdown);
  countdownRef.current = countdown;

  useEffect(() => {
    if( !startTimeQuery?.data ) return;
    const gameStartTime: Date = new Date( startTimeQuery?.data?.startTime );
    const milliseconds: number= gameStartTime.getTime();
    const endTime: Date= new Date(new Date(milliseconds + targetTime * 1000));

    const nowTime: Date = new Date();
    const diffTime= endTime.getTime() - nowTime.getTime();

    if ( diffTime > 0 ) {
      setCountdown( Math.floor(diffTime / 1000) );
      const timer = setInterval(() => {
        if (countdownRef.current !== null && countdownRef.current !== undefined) {
          setCountdown(( prevCountdown: number | undefined ) => {
            if ( prevCountdown !== undefined && prevCountdown >= 1) {
              return prevCountdown - 1;
            }
            else if (prevCountdown === 0) {
              clearInterval(timer);
              navigate( redirectUrl );
              return 0;
            }
            else {
              return prevCountdown;
            }
          });
        }
      }, 1000);
    }
    else {
      setCountdown(0);
    }
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
