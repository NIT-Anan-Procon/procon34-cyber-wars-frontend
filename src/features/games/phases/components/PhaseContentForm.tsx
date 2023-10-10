import React  from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';
import { useSendFlagMutation } from '@/features/games/sendFlag';

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
  height  : 6rem;
  width   : 15rem;
  font-size: 2.6rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
`;

type PhaseContentFormProps= {
  id: string;
  submitFnEndpoint: string;
};

export const PhaseContentForm= ({ id, submitFnEndpoint }: PhaseContentFormProps) => {
  const [ flagValue, setFlagValue ]= React.useState();
  const sendFlagMutation= useSendFlagMutation();
  

  const handleChange= (e) => {
    setFlagValue(e.target.value );
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
        onChange= { handleChange }
      />
      <$SendKeyButton 
        type={'button'}
        onClick={ async() => {
          await sendFlagMutation.mutateAsync({ endpoint: submitFnEndpoint,  flag: flagValue })
        }}
      >
        Send
      </$SendKeyButton>
    </_PhaseContentForm>
  );
};