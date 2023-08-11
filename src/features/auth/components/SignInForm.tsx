import styled from "styled-components";

import { AuthUser } from "..";
import { useAuth } from "@/libs/auth";
import { Form, InputField } from "@/components/Form";
import {z} from 'zod';
type SignInFormProps= {
  onSuccess: () => void;
}
const schema = z.object({
  userName: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});
export const SignInForm= ({ onSuccess }: SignInFormProps) => {
  const { isSignIn } = useAuth();

  return (
    <div>
      <Form<AuthUser, typeof schema>
        onSubmit={async (values: AuthUser) => {
          await isSignIn(values);
          onSuccess();
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField 
              type='text'
              label= 'ユーザ名'
              error={formState.errors['userName']}
              registration={register('userName')}   
            />   
            <InputField
              type='password'
              label='パスワード'
              error={formState.errors['password']}
              registration={register('password')}
            />      
            <div>
              
            </div>
          </>
        )}
      </Form>      
    </div>
  );
};

