import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';
import { useSendFlagMutation } from '@/features/games/sendFlag';
import { useState } from 'react';

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
  const [ flagValue, setFlagValue ]= React.useState<string>('');
  const sendFlagMutation= useSendFlagMutation();
  const [sended, setSended] = useState(false);

  const handleChange= ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setFlagValue( e.target.value );
  };

  return (
    <_PhaseContentForm >
      { sended ? <div style={{ color: 'red'; }}>送信しました</div> : <div></div> }
      <InputField
        id   = { id } 
        type = { 'text' }
        styles={ $InputKeyFeild }
        value= { flagValue }
        placeholder= { 'キーを入力してください' } 
        onChange= { handleChange }
      />
      <$SendKeyButton 
        type={'button'}
        onClick={ async() => {
          await sendFlagMutation.mutateAsync({ endpoint: submitFnEndpoint, flag: flagValue })
          setSended(true);
          const id = setTimeout(() => setSended(false), 3000);
          clearTimeout(id);
        }}
      >
        Send
      </$SendKeyButton>
    </_PhaseContentForm>
  );
};
