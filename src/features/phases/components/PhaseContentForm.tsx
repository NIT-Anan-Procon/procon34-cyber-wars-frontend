import React  from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';
import { useSendFlagMutation } from '@/features/sendFlag';

const _PhaseContentForm= styled.div`
  height    : 100%;
  width     : 100%;
  background: transparent;
  display   : flex;
  align-items: center;
  justify-content: end;
  column-gap: 15px;
`;

const $InputKeyFeild= `
  width: 40rem;
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
  const [ flagValue, setFlagValue ]= React.useState();
  const sendFlagMutation= useSendFlagMutation();
  

  const handleChange= () => {
    setFlagValue( flagValue );
  };

  return (
    <_PhaseContentForm >
      <InputField
        id   = { id } 
        type = { 'text' }
        size = { 'small' }
        styles={ $InputKeyFeild }
        value= { flagValue }
        placeholder= { 'キーを入力してください' } 
        onChange   = { handleChange }
      />
      <$SendKeyButton type={'button'} onClick={ async() => await sendFlagMutation.mutateAsync( submitFnEndpoint, flagValue )}> Send </$SendKeyButton>
    </_PhaseContentForm>
  );
};