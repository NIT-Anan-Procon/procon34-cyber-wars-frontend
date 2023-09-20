import { isCorrectState, isValidState, scoreState } from '@/atoms';
import { GAME_SCORE_KEY, IS_CORRECT_KEY, IS_VALID_KEY } from '@/config/responseKeys';
import { axios } from '@/lib/axios';
import { useSetRecoilState } from 'recoil';

type sendKeyDataProps= {
  endpoint: string;
  keyValue: string;
};

type SendKeyResType= {
  [ IS_VALID_KEY ]  : boolean,
  [ IS_CORRECT_KEY ]: boolean,
  [ GAME_SCORE_KEY ]: number
};

export const useSendKey= () => {
  const setIsValid  = useSetRecoilState( isValidState );
  const setIsCorrect= useSetRecoilState( isCorrectState );
  const setScore    = useSetRecoilState( scoreState );

  async function sendKey( endpoint: string, keyValue: string ): Promise<void> {
    return await axios.post( endpoint, keyValue )
    .then( ( res ) => {
      setIsValid( res[ IS_VALID_KEY ] );
      setIsCorrect( res[ IS_CORRECT_KEY ] );
      setScore( res[ GAME_SCORE_KEY ] );
    })
  };

  return { sendKey };
};