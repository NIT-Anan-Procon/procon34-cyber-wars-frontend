import { isAuthState } from '@/atoms';
import { useSetRecoilState } from 'recoil';

type ResData= {
  [ ISSUCCESS_KEY: string ]: boolean;
};

export const useIsAuthenticated= (key: string) => {
  const setIsSuccessful= useSetRecoilState( isAuthState );

  function setIsAuthenticated( resData: ResData ) {
    setIsSuccessful( resData[ key ] );
  }
  return { setIsAuthenticated };
};