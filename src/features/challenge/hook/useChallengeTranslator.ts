
import {
  CHOICES_KEY,
  CODE_PATH_KEY,
  HINT_KEY,
  HINT_SCORE_KEY,
  VULNERABILITIES_KEY,
  useFetchChallengeQuery
} from '@/features/challenge';

export const useChallengeTranslator= () => {
  const challengeQuery = useFetchChallengeQuery({
    config: {
      refetchOnMount: false,
      staleTime: Infinity,
      cacheTime: Infinity
    }
  });

  if( challengeQuery.isLoading ) {
    return ;
  }
  if( !challengeQuery?.data ) return null;
  
  const challengePath= challengeQuery?.data?.[ CODE_PATH_KEY ];

  const vulnerabilities = challengeQuery?.data?.[ VULNERABILITIES_KEY ].flatMap(
    (item: { [ CHOICES_KEY ]: string[]; [ HINT_KEY ]: string; [ HINT_SCORE_KEY ]: number }) =>
      item[ CHOICES_KEY ]
  );

  const hintObject= challengeQuery?.data?.[ VULNERABILITIES_KEY ].map((item, index) => {
    const hint= item[ HINT_KEY ];
    const hintScore= item[ HINT_SCORE_KEY ];
    return {
      index: index,
      hint: hint,
      hintScore: hintScore
    };
  });
  
  return { challengePath, vulnerabilities, hintObject };
};