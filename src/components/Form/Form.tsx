import styled from 'styled-components';
import { ZodType, ZodTypeDef } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  useForm, 
  UseFormReturn, 
  UseFormProps, 
  SubmitHandler 
} from 'react-hook-form';

<<<<<<< HEAD
const FormContainer = styled.form<{ styles?: string }>`
=======
const _Form = styled.form`
>>>>>>> a76ffb114326a6370828c7a550356847a40b688e
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

  ${(props) => props.styles}
`;

type FormProps<TFormValues extends Record<string, any>, Schema extends ZodType<any, ZodTypeDef, any>> = {
<<<<<<< HEAD
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id     ?: string;
  schema ?: Schema;
  styles ?: string;
=======
  onSubmit : SubmitHandler<TFormValues>;
  children : (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options ?: UseFormProps<TFormValues>;
  id      ?: string;
  schema  ?: Schema;
>>>>>>> a76ffb114326a6370828c7a550356847a40b688e
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  options,
  schema,
  styles,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({ mode: 'onChange', ...options, resolver: schema && zodResolver(schema) });

  return (
<<<<<<< HEAD
    <FormContainer 
      onSubmit= {methods.handleSubmit(onSubmit)}
      styles  = { styles }
    >
=======
    <_Form onSubmit={methods.handleSubmit(onSubmit)}>
>>>>>>> a76ffb114326a6370828c7a550356847a40b688e
      {children(methods)}
    </_Form>
  );
};

