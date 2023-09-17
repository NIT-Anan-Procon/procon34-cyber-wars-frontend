import { ROOM_URL } from "@/config/apiUrls";
import { axios } from "@/lib/axios";

export const deleteRoom= async() => {
  return await axios.delete( ROOM_URL );
};

