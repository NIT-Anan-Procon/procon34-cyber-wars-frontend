// import styled from "styled-components";
// import { ZodType, ZodTypeDef } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm, UseFormReturn, UseFormProps, SubmitHandler } from 'react-hook-form';

// type FormProps<TFormValues, Schema> = {
//   onSubmit: SubmitHandler<TFormValues>;
//   children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
//   options?: UseFormProps<TFormValues>;
//   id?: string;
//   schema?: Schema;
// };

// const FormContainer = styled.form`
//   width: 60rem;
//   height: 70rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   row-gap: 2rem;
//   background: white;
// `;

// export const Form = <
//   TFormValues extends Record<string, unknown> = Record<string, unknown>,
//   Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
// >({
//   onSubmit,
//   children,
//   options,
//   schema,
// }: FormProps<TFormValues, Schema>) => {
//   const methods = useForm<TFormValues>({ mode: 'onChange', ...options, resolver: schema && zodResolver(schema) });

//   return (
//     <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
//       {children(methods)}
//     </FormContainer>
//   );
// };

