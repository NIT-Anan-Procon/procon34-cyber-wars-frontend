// import { selectorFamily } from 'recoil';

// import { previewCodePathState } from '@/atoms';
// import { PHP_REVISION_URL, PHP_URL } from '../../config';

// export const createAbsolutePath= selectorFamily({
//   key: 'selector_createAbsolutePath',
//   get: ( phase ) => ({ get }) => {
//     if( phase === 'battle' ) {
//       const revisionPathId= get( previewCodePathState );
//       return `${ PHP_REVISION_URL }` + `${ revisionPathId }.php`
//     } else {
//       const pathId= get( previewCodePathState );
//       return `${ PHP_URL }` + `${ pathId }/index.php`;
//     }
//   }
// });