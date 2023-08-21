import { useRef } from 'react';
import styled from 'styled-components';

const DialogLayout= styled.dialog`

`;

const DialogContent= styled.div`

`;

type DialogProps= {
  isOpen: boolean
  children: React.ReactNode;
}

export const Dialog= ({
  isOpen, children
}: DialogProps): React.ReactElement => {
  const dialogRef= useRef<HTMLDialogElement>(null);
  
  return (
    <DialogLayout ref={dialogRef} >
      <DialogContent>
        {children}
      </DialogContent>
    </DialogLayout>
  );
}