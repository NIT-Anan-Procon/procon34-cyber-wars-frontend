import styled from "styled-components";
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";
import { InputSize } from '@/';

type InputFieldProps= FieldWrapperPassThroughProps & {
  type?: 'text' | 'password';
  size?: InputSize
  registration: Partial<UseFormRegisterReturn>;
}

const InputFeildStyle= styled.input`
  
`;

export const InputField= (props: InputFieldProps) => {
  const { type, label, registration, error } = props;

  return (
    <FieldWrapper label={label} error={error} >
      <InputFeildStyle
        type={type}
        {...registration}
      />
    </FieldWrapper>
  );
};