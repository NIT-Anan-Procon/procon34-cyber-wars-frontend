import { useChallengeQuery } from "..";
import { 
  CHOICES_KEY, 
  CODE_PATH_KEY, 
  HINT_KEY, 
  HINT_SCORE_KEY, 
  VULNERABILITIES_KEY 
} from "@/constants/responseKeys";

export const useChallengeDataTranslator= () => {
  const { data: challengeData, ...options } = useChallengeQuery({
    config: {
      refetchOnMount: false,
      staleTime: Infinity,
      cacheTime: Infinity
    }
  });

  const challengePath= challengeData?.[ CODE_PATH_KEY ];

  const vulnerabilities = challengeData?.[VULNERABILITIES_KEY].flatMap(
    (item: { choices: string[]; hint: string; hintScore: number }) =>
      item[CHOICES_KEY]
  );

  const hintObject= challengeData?.[ VULNERABILITIES_KEY ].map((item, index) => {
    const hint= item[ HINT_KEY ];
    const hintScore= item[ HINT_SCORE_KEY ];
    return {
      index: index,
      hint: hint,
      hintScore: hintScore
    };
  });
  
  return { challengePath, vulnerabilities, hintObject, ...options }
};