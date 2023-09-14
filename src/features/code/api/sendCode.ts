import { useRecoilValue, useSetRecoilState } from 'recoil';

import { axios }            from '@/lib/axios';
import { DEFENCE_CODE_URL } from '@/config/apiEndpoints';
import { CODE_KEY, IS_VALID_KEY }  from '@/config/responseKeys';
import { codeState, isValidState } from '@/atoms';

export const useSendCode = () => {
  const currentCode= useRecoilValue( codeState ); 
  const setIsValid = useSetRecoilState( isValidState );

  async function sendCode(): Promise<void> {
    const sendData= JSON.stringify({ [ CODE_KEY ]: currentCode });
    const resData = await axios.put( DEFENCE_CODE_URL, sendData );

    setIsValid( resData[ IS_VALID_KEY ] );
  };

  return { sendCode };
};