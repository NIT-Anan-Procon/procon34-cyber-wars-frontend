import styled          from "styled-components";

import { Form, FormTitle, InputField } from "@/components/Form";
import { Button, Link }          from "@/components/Elements";
import { AuthUser, FormSchema }  from "..";
import { colors }                from "@/assets/styles";
import { useSignUp } from "../api";

type RegisterFormProps = {
	onSuccess: () => void;
};

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

export const RegisterForm = ({onSuccess}: RegisterFormProps) => {
	const { isSignUp }= useSignUp();

  return (
    <>
    <Form<AuthUser, typeof FormSchema>
      onSubmit={async(data:AuthUser) => {
        await isSignUp(data);
        onSuccess();
      }} 
      schema={FormSchema}
    >
      {({ register, formState:{errors} }) => (
        <>
          <FormTitle title={ 'Create Account' } />
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
            <Button type="submit">Create Account</Button>        
          </ContentAreaWrapper>         
        </>
      )}</Form>
      <NavDiscription >
        Already have an account? 
        <Link to='../login'>Create Account</Link>
      </NavDiscription>
    </>
  );
};