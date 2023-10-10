import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useFetchStartTimeQuery } from "@/features/games/gameTimer";

export const useCountDownTimer= ( targetTime: number, redirectUrl: string ) => {
  const [ countdown, setCountdown ]= useState<number | undefined>(0);
  const navigate= useNavigate();
  const { data: startTime }= useFetchStartTimeQuery({
    config: {
      refetchOnMount: true
    }
  });

  const  SECONDS_IN_MINUTE= 60;

  const gameStartTime: Date = new Date( startTime?.startTime );
  const milliseconds: number= gameStartTime.getTime();
  const endTime: Date= new Date(new Date(milliseconds + targetTime * 1000))

  useEffect(() => {
  const nowTime: Date = new Date();
  const diffTime= endTime.getTime() - nowTime.getTime();

    if ( diffTime > 0 ) {
      setCountdown( Math.floor(diffTime / 1000) );
      const timer = setInterval(() => {
        if (countdown !== null && countdown !== undefined) {
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
  }, [ navigate, redirectUrl, startTime ] )

  const formatCountdown = (): string | undefined => {
    if (countdown !== undefined) {  
      let minutes: string | number = Math.floor(countdown / SECONDS_IN_MINUTE);
      let seconds: string | number = countdown % SECONDS_IN_MINUTE;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      return countdown >= 0 ? minutes + ':' + seconds : '00:00';
    }
  }
  
  return { formatCountdown } 
};