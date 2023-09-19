import { hasHintState } from '@/atoms';
import { ATTACK_HINT_URL } from '@/config/apiUrls';
import { VULNERABILITY_ID_KEY } from '@/config/responseKeys';
import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

export const showHintIndex= async( vulnerabilityId: number ) => {
  const postData= JSON.stringify({[ VULNERABILITY_ID_KEY ]: vulnerabilityId });

  return await axios.post( ATTACK_HINT_URL,  postData);
};

type UseShowHintIndexProps= {
  config?: MutationConfig<typeof showHintIndex>
  vulnerabilityId: number;
};

export const useShowHintIndex= () => {
  return useMutation({
    onMutate: async ( newVulnerabilityId: number ) => {
      const prevVulnerabilityIds= await queryClient.getQueryData(['query_challenge']);

      if( !prevVulnerabilityIds ) {
        queryClient.setQueriesData(["query_showHintIndex"],[]);
      }
      
      queryClient.setQueryData(["query_showHintIndex"], (prev) => {
        if (!prev) {
          return [newVulnerabilityId];
        }
        return [...prev, newVulnerabilityId];
      });
      return prevVulnerabilityIds;
    },
    cacheTime :Infinity,
    mutationFn: showHintIndex,
  })
};