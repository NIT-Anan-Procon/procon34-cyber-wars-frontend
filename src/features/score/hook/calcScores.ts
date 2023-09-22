import { useScoresQuery } from "..";

export const useCalcScores= () => {
  const scoresQuery= useScoresQuery({
    config: {
      cacheTime: Infinity
    }
  });


  return 
};