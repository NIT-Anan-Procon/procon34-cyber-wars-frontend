import { START_GAME_URL } from "@/config/apiUrls";
import axios from "axios";

export const startGame= async() => {
  return await axios.patch( START_GAME_URL );
};