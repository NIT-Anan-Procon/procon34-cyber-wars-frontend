import { axios } from '@/lib/axios';

export const fetchUTCTimeFn= async(): Promise<string> => {
  return await axios.get( 'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam' )
  .then(( res ) => res.data.dateTime );
};