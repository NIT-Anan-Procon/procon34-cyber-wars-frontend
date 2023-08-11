import styled from "styled-components";
import { ZodType, ZodTypeDef } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn, UseFormProps, SubmitHandler } from 'react-hook-form';

import { AuthUser } from "@/features/auth";

type FormProps<Schema>= {
  onSubmit: SubmitHandler<AuthUser>;
  children: (methods: UseFormReturn<AuthUser>) => React.ReactNode;
  options?: UseFormProps<AuthUser>; 
  schema?: Schema;
};

const FormContainer= styled.form`
  width: 60rem;
  height: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  background: white;
`;

export const Form=<Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>>
({
  onSubmit,
  children,
  options,
  schema,
}): FormProps<Schema> => {
  const methods= useForm<AuthUser>({ ...options, resolver: schema && zodResolver(schema) });

  return (
    <FormContainer onSubmit={methods.handleSubmit(onSubmit)} >
      {children(methods)}
    </FormContainer>
  );
}