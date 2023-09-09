import { isAuthState } from '@/atoms';
import { ISSUCCESS_KEY } from '@/config/responseKeys';
import { useSetRecoilState } from 'recoil';

type ResData= {
  [ ISSUCCESS_KEY: string ]: boolean;
};

export const useIsAuthenticated= () => {
  const setIsSuccessful= useSetRecoilState( isAuthState );

  function setIsAuthenticated( resData: ResData ) {
    setIsSuccessful( resData[ ISSUCCESS_KEY ] );
  }
  return { setIsAuthenticated };
};