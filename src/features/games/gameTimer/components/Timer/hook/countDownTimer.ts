import { useFetchStartTimeQuery } from "@/features/games/gameTimer";
import { START_TIME_KEY } from "@/features/games/gameTimer/api";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const useCountDownTimer= ( targetTime: number, redirectUrl: string ) => {
  const [ countdown, setCountdown ]= useState<number | null>(null);
  const navigate= useNavigate();
  const { data: startTime }= useFetchStartTimeQuery({
    config: {
      refetchOnMount: true
    }
  });

  const  SECONDS_IN_MINUTE= 60;

  const gameStartTime = new Date( startTime?.[ START_TIME_KEY ] );
  const milliseconds  = gameStartTime.getTime();
  const endTime       = new Date(new Date(milliseconds + targetTime * 1000))

  useEffect(() => {
    const nowTime= new Date();
    const diffTime= endTime - nowTime;

    if ( diffTime > 0 ) {
      setCountdown( Math.floor(diffTime / 1000) );
        const timer = setInterval(() => {
          if (countdown !== null && countdown !== undefined) {
            setCountdown(( prevCountdown ) => {
              if ( prevCountdown >= 1) {
                return prevCountdown - 1;
              }
              else if (prevCountdown === 0) {
                clearInterval(timer);
                navigate( redirectUrl );
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

  const formatCountdown = (): string | null => {
    if (countdown === null) {
      return null;
    }
    let minutes: string | number = Math.floor(countdown / SECONDS_IN_MINUTE);
    let seconds: string | number = countdown % SECONDS_IN_MINUTE;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return countdown >= 0 ? minutes + ':' + seconds : '00:00';
  }
  
  return { formatCountdown } 
};