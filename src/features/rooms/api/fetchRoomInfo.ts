import { roomMemberInfo } from '@/atoms';
import { ROOM_URL } from '@/config/apiUrls';
import { axios } from '@/lib/axios';
import { QueryConfig } from '@/lib/react-query';
import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

export const fetchRoomInfo= async() => {
  return await axios.get( ROOM_URL );
};

type QueryFn= typeof fetchRoomInfo;

type UseRoomInfoQueryOptions= {
  config?: QueryConfig<QueryFn>;
};

export const useRoomInfoQuery= ({ config } : UseRoomInfoQueryOptions ) => {
  return useQuery({
    queryKey: [ 'query_roomInfo' ],
    queryFn : () => fetchRoomInfo(),
    ...config
  })
};