import { useEffect, useState } from "react";
import { useStartTime } from "../../..";
import { START_TIME_KEY } from "@/config/responseKeys";

export const useCountDownTimer= ( targetTime: number, redirectUrl: string ) => {
  const [ countdown, setCountdown ]= useState<number | null>(null);
  const { data: startTime }= useStartTime();

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
          setCountdown(( prevCountdown ) => {
            if ( prevCountdown > 1) {
              return prevCountdown - 1;
            }
            else if (prevCountdown === 1) {
              clearInterval(timer);
              window.location.href= redirectUrl;
            }
            else {
              return prevCountdown;
            }
          });
        }, 1000);
        return () => clearInterval(timer);
      }
      else {
        setCountdown(0);
    }
  }, [ startTime?.[ START_TIME_KEY ], redirectUrl ] )

  const formatCountdown = (): string | null => {
    if (countdown === null) {
      return null;
    }
    let minutes: string | number = Math.floor(countdown / SECONDS_IN_MINUTE);
    let seconds: string | number = countdown % SECONDS_IN_MINUTE;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    console.log();
    return minutes + ':' + seconds;
  };

  return formatCountdown;
};