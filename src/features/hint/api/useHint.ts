import { hasHintState } from '@/atoms';
import { ATTACK_HINT_URL } from '@/config/apiUrls';
import { VULNERABILITY_ID_KEY } from '@/config/responseKeys';
import { axios } from '@/lib/axios';
import { useSetRecoilState } from 'recoil';

export const useHint= () => {
  const setHasHint= useSetRecoilState( hasHintState );

  async function postVulnerabilityId( vulnerabilityId: number ) {  
    const postData= JSON.stringify(
    { 
      [ VULNERABILITY_ID_KEY ]: vulnerabilityId 
    }
    );
    await axios.post( ATTACK_HINT_URL,  postData);
    setHasHint( true );
  }

  return { postVulnerabilityId };
};