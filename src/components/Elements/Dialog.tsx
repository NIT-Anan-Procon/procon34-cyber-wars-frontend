// import { useEffect, useRef } from 'react';
// import styled from 'styled-components';

// const DialogLayout= styled.dialog`

// `;

// const DialogContent= styled.div`

// `;

// type DialogProps= {
//   isOpen: boolean
//   onClose: () => void;
//   children: React.ReactNode;
// }

// export const Dialog= ({
//   isOpen, onClose, children
// }: DialogProps): React.ReactElement => {
//   const dialogRef= useRef<HTMLDialogElement>(null);
  
//   useEffect((): void => {
//     const dialogElement= dialogRef.current;
//     if(!dialogElement) {
//       return;
//     }
//     if(isOpen) {
//       if(dialogElement.hasAttribute('open')) {
//         return;
//       }
//       dialogElement.showModal();
//     } else {
//       if(!dialogElement.hasAttribute('open')) {
//         return;
//       }
//       dialogElement.close();
//     }
//   },[isOpen]);

//   return (
//     <DialogLayout ref={dialogRef} >
//       <DialogContent>
//         {children}
//       </DialogContent>
//     </DialogLayout>
//   );
// }