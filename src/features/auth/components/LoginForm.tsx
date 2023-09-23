import styled          from "styled-components";

import { Form, FormTitle, InputField } from "@/components/Form";
import { Button, Link }          from "@/components/Elements";
import { AuthUser, FormSchema }  from "..";
import { colors }                from "@/assets/styles";
import { useSignIn } from "../api/signIn";

const ContentAreaWrapper= styled.div`
  width         : 100%;
  margin-top    : 3rem;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  row-gap       : 2.75rem;
`;

const NavDiscription= styled.p`
  position    : absolute;
  bottom      : 20%;
  line-height : 2rem;
  font-size   : 1.5rem;
  color       : ${colors.secondary};
  word-spacing: 0.35rem;
`;

type LoginFormProps = {
	onSuccess: () => void;
};

export const LoginForm = ({onSuccess}: LoginFormProps) => {
	const { isSignIn }= useSignIn();

  return (
    <>
      <Form<AuthUser, typeof FormSchema>
        onSubmit={async(data:AuthUser ) => {
          await isSignIn(data);
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
              <Button type="submit">Login</Button>        
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