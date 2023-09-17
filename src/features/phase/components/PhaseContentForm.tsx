import styled from 'styled-components';

import { sendKeyState }       from '@/atoms';
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';
import { useSendKey } from '@/features/sendKeys';

const _PhaseContentForm= styled.form`
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
  const [ keyValue, updateKeyValue ]= useAtomValueChange( sendKeyState );
  const { sendKeyData }= useSendKey();

  return (
    <_PhaseContentForm 
      onSubmit={
        async( value ) => await sendKeyData( submitFnEndpoint, value )
      }
    >
      <$InputKeyFeild
        id   = { id } 
        type = { 'text' }
        size = { 'small' }
        value= { keyValue }
        placeholder= { 'キーを入力してください' } 
        onChange   = { updateKeyValue }
      />
      <$SendKeyButton type={'submit'}> Send </$SendKeyButton>
    </_PhaseContentForm>
  );
};