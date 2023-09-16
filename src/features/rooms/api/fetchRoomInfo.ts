import { ROOM_URL } from '@/config/apiEndpoints';
import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const fetchRoomInfo= async() => {
  const resRoomInfo = await axios.get( ROOM_URL );

  return resRoomInfo;
};

export const useRoomInfoQuery= ({ config }) => {
  return useQuery({
    queryKey: [ 'query_roomInfo' ],
    queryFn : fetchRoomInfo,
  })
};