import styled from "styled-components";
import { ZodType, ZodTypeDef } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn, UseFormProps, SubmitHandler } from 'react-hook-form';

const _Form = styled.form`
  width         : clamp(40rem, 40vw, 100%);
  height        : calc(85% - 2rem);
  padding       : 4rem;
  position      : relative;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  row-gap       : 5rem;
  background    : #2D2D2D;
  border-radius : 2.75rem;
  box-shadow    : 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
`;

type FormProps<TFormValues extends Record<string, any>, Schema extends ZodType<any, ZodTypeDef, any>> = {
  onSubmit : SubmitHandler<TFormValues>;
  children : (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options ?: UseFormProps<TFormValues>;
  id      ?: string;
  schema  ?: Schema;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  options,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({ mode: 'onChange', ...options, resolver: schema && zodResolver(schema) });

  return (
    <_Form onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </_Form>
  );
};

