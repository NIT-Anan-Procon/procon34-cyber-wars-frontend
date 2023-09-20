import { startTimeState } from "@/atoms/game/startTimeState";
import { FETCH_GAME_START_TIME_URL } from "@/config/apiUrls";
import { START_TIME_KEY } from "@/config/responseKeys";
import { axios } from "@/lib/axios";
import { useSetRecoilState } from "recoil";

export const useFetchStartTime= () => {
  const setStartTime= useSetRecoilState( startTimeState );

  async function startTime() {
    return await axios.get( FETCH_GAME_START_TIME_URL )
      .then((res) => {
        setStartTime(res[ START_TIME_KEY ])
      })
  };

  return { startTime }
};

// import { useQuery } from '@tanstack/react-query';

// import { axios } from '@/lib/axios';
// import { FETCH_GAME_START_TIME_URL } from '@/config/apiUrls';

// export const fetchStartTime= async(): Promise<string> => {
//   const  startTime: string = await axios.get( FETCH_GAME_START_TIME_URL );
//   return startTime;
// };

// export const useStartTime= () => {
//   return useQuery({
//     queryKey: [ 'query_startTime' ],
//     queryFn : fetchStartTime,
//   });
// };[]