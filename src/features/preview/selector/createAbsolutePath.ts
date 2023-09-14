import { selector } from 'recoil';

import { codeState, revisionCodeState } from '@/atoms';

export const createAbsolutePath= selector<string, string>({
  key: 'selector_createAbsolutePath',
  get: ( phase ) => ({ get }) => {
    if( phase === 'battle' ) {
      const revisionPathId= get( revisionCodeState );
      return `https://202.231.44.30:8080/php/revision/${ revisionPathId }.php`
    } else {
      const pathId= get( codeState );
      return `https://202.231.44.30:8080/php/${ pathId }/index.php`;
    }
  }
});