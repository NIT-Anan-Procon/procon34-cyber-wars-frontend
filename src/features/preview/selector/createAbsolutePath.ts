import { selector } from 'recoil';

import { codeState, revisionCodeState } from '@/atoms';
import { PHP_REVISION_URL, PHP_URL } from '../config';

export const createAbsolutePath= selector({
  key: 'selector_createAbsolutePath',
  get: ( phase ) => ({ get }) => {
    if( phase === 'battle' ) {
      const revisionPathId= get( revisionCodeState );
      return `${ PHP_REVISION_URL } + ${ revisionPathId }.php`
    } else {
      const pathId= get( codeState );
      return `${ PHP_URL } + ${ pathId }/index.php`;
    }
  }
});