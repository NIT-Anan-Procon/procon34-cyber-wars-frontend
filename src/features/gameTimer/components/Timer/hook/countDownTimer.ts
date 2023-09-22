import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { startTimeState } from "@/atoms/game/startTimeState";
import { useNavigate } from "react-router-dom";

export const useCountDownTimer= ( targetTime: number, redirectUrl: string ) => {
  const [ countdown, setCountdown ]= useState<number | null>(null);
  const startTime= useRecoilValue( startTimeState );
  const navigate= useNavigate();

  const  SECONDS_IN_MINUTE= 60;

  const gameStartTime = new Date( startTime );
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
                window.location.href= redirectUrl
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
  }, [ navigate, redirectUrl, endTime ] )

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