import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';
import { useSendFlagMutation } from '@/features/games/sendFlag';
import { usetRecoilState } from 'recoil';
import { isDisplayHintState } from '../../scores/states/atoms';

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
  const [ isScoreHistory, setIsScoreHistory]= useRecoilState( isDisplayHintState );
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScoreHistory( true );
    }, 3000);

    return () => {
      clearTimeout(timer);
      setIsScoreHistory( false );
    };
  }, [ sendFlagMutation ]);

  const handleChange= ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setFlagValue( e.target.value );
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
          await sendFlagMutation.mutateAsync({ endpoint: submitFnEndpoint, flag: flagValue })
        }}
      >
        Send
      </$SendKeyButton>
    </_PhaseContentForm>
  );
};