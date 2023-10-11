import styled from 'styled-components';

import { Form, FormTitle, InputField } from '@/components/Form';
import { Button, Link }          from '@/components/Elements';
import { AuthUser, FormSchema, fetchAuthenticatedUserFn }  from '..';
import { colors }                from '@/assets/styles';
import { useLoginMutation } from '../api/login/useLoginMutation';

const ContentAreaWrapper= styled.div`
  width         : 100%;
  margin-top    : 3rem;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  justify-content: center;
  row-gap       : 3.75rem;
`;

const NavDiscription= styled.p`
  position    : absolute;
  bottom      : 20%;
  line-height : 2rem;
  font-size   : 1.5rem;
  color       : ${colors.secondary};
  word-spacing: 0.35rem;
`;

const $SubmitButton= styled(Button)`
  margin-top: 3rem;
`;

type LoginFormProps = {
	onSuccess?: () => void;
};

export const LoginForm = ({onSuccess}: LoginFormProps) => {
	const loginMutation= useLoginMutation();

  return (
    <>
      <Form<AuthUser, typeof FormSchema>
        onSubmit={async(data:AuthUser ) => {
          await loginMutation.mutateAsync( data );
          onSuccess();
        }} 
        schema={FormSchema}
      >
        {({ register, formState:{errors} }) => (
          <>
            <FormTitle title={ 'Sign In' } />
            <ContentAreaWrapper>
              <InputField
                id   = { 'userName' }        
                type = { 'text' }
                size = { 'medium' }
                label= { 'ユーザ名' }
                error= { errors.name }
                registration= { register('name') }      
              />
              <InputField
                id   = { 'password' }
                type = { 'password' }
                size = { 'medium' }
                label= { 'パスワード' }
                error= { errors.password }
                registration= { register('password') }
              />
              <$SubmitButton type="submit">Sign In</$SubmitButton>        
            </ContentAreaWrapper>         
          </>
        )}
      </Form>
      <NavDiscription >
        Don't have account? 
        <Link to='../register'>Sign up</Link>
      </NavDiscription>
    </>
  );
};