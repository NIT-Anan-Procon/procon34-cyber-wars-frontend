import { useSetRecoilState } from "recoil";
import { axios } from "@/lib/axios";
import { endTimeState } from "../..";

export const useFetchUTCTime= () => {
  const setEndCurrentUtcTime= useSetRecoilState( endTimeState );

  async function fetchUTCTime() {
    await axios.get( 'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam' )
    .then(( res ) => setEndCurrentUtcTime( res.data.dateTime ));
  };

  return { fetchUTCTime };
};