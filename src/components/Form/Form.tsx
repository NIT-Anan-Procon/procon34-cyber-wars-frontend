import styled from 'styled-components';
import { ZodType, ZodTypeDef } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  useForm, 
  UseFormReturn, 
  UseFormProps, 
  SubmitHandler 
} from 'react-hook-form';
import { colors } from '@/assets/styles';

const FormContainer = styled.form<{ styles?: string }>`
  width         : clamp(40rem, 40vw, 100%);
  height        : 85%;
  padding       : 5rem;
  position      : relative;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  row-gap       : 5rem;
  background    : ${ colors.bgDarker };
  border-radius : 2.75rem;
  box-shadow    : 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);

  ${(props) => props.styles}
`;

type FormProps<TFormValues extends Record<string, any>, Schema extends ZodType<any, ZodTypeDef, any>> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id     ?: string;
  schema ?: Schema;
  styles ?: string;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
  onSubmit,
  children,
  options,
  schema,
  id,
  styles,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({ mode: 'onChange', ...options, resolver: schema && zodResolver(schema) });

  return (
    <FormContainer 
      onSubmit= {methods.handleSubmit(onSubmit)}
      styles  = { styles }
      id={id}
    >
      {children(methods)}
    </FormContainer>
  );
};

