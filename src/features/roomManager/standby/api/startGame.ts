import { START_GAME_URL } from "@/constants/apiUrls";
import axios from "axios";

export const startGame= async() => {
  return await axios.patch( START_GAME_URL );
};