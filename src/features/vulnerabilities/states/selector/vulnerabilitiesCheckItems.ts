// import { selectorFamily } from 'recoil';
// import { checkedVulnerabilies } from '../atom';

// export const vulnerabilityCheckItems= selectorFamily({
//   key: 'selector_vulnerabilityCheckItems',
//   get: ( data ) => ({ get }) => {
//     const vulnerabilityListState= get( checkedVulnerabilies );

//     const vulnerabilityCheckItems= data?.map(
//       ( value: string, index: number ) => {
//         return {
//           id: index,
//           value: value,
//           checked: false
//         }
//       }
//     );

//     return vulnerabilityCheckItems;
//   },
//   set: ( data ) => ({ set }, newState ) => {
//     set( checkedVulnerabilies, newState );
//   }
// });