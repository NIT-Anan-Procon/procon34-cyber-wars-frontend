import { useRecoilValue, useSetRecoilState } from 'recoil';

import { axios }            from '@/lib/axios';
import { DEFENCE_CODE_URL } from '@/config/apiUrls';
import { CODE_KEY, IS_VALID_KEY }  from '@/config/responseKeys';
import { codeState, isValidState } from '@/atoms';

export const useSendCode = () => {
  const setIsValid = useSetRecoilState( isValidState );

  async function sendCode( currentCode: string ): Promise<void> {
    const sendData= JSON.stringify({ [ CODE_KEY ]: currentCode });
    const resData = await axios.put( DEFENCE_CODE_URL, sendData );

    setIsValid( resData[ IS_VALID_KEY ] );
  };

  return { sendCode };
};