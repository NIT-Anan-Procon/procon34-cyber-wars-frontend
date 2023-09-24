import styled from 'styled-components';

// import { sendKeyState }       from '@/atoms';
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';
// import { useSendKey } from '@/features/sendKeys';
// import { useState } from 'react';

const _PhaseContentForm= styled.div`
  height    : 100%;
  width     : 100%;
  background: transparent;
  display   : flex;
  align-items: center;
  justify-content: space-around;
`;

const $InputKeyFeild= styled(InputField)`
  width: 50%;
`;

const $SendKeyButton= styled(Button)`
  width: 20rem;
  margin: 0;
`;

type PhaseContentFormProps= {
  id: string;
  submitFnEndpoint: string;
};

export const PhaseContentForm= ({ id, submitFnEndpoint }: PhaseContentFormProps) => {
  // const [ keyValue, setKeyValue ]= useState();
  // const { sendKey }= useSendKey();

  // const handleChange= () => {
  //   setKeyValue( keyValue );
  // };

  return (
    <_PhaseContentForm >
      {/* <$InputKeyFeild
        id   = { id } 
        type = { 'text' }
        size = { 'small' }
        value= { keyValue }
        placeholder= { 'キーを入力してください' } 
        onChange   = { handleChange }
      />
      <$SendKeyButton type={'button'} onClick={ async() => await sendKey( submitFnEndpoint, keyValue )}> Send </$SendKeyButton> */}
    </_PhaseContentForm>
  );
};