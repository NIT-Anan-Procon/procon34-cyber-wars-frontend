import { isValidState } from '@/atoms';
import { IS_VALID_KEY } from '@/config/responseKeys';
import { axios } from '@/lib/axios';
import { useSetRecoilState } from 'recoil';

type sendKeyDataProps= {
  endpoint: string;
  keyValue: string;
};

export const useSendKey= () => {
  const setIsValid= useSetRecoilState( isValidState );

  async function sendKeyData({ endpoint, keyValue }: sendKeyDataProps ): Promise<void> {
    const resSendKey= await axios.post( endpoint, keyValue );
    
    setIsValid( resSendKey[ IS_VALID_KEY ] );
  };

  return { sendKeyData };
};