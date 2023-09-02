import styled          from "styled-components";
import { useForm }     from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth }               from "@/libs/auth";
import { FormTitle, InputField } from "@/components/Form";
import { Button, Link }          from "@/components/Elements";
import { AuthUser, FormSchema }  from "..";
import { colors }                from "@/styles";

type SignUpFormProps = {
	onSuccess: () => void;
};

const FormStyle= styled.form`
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

export const SignUpForm = ({onSuccess}: SignUpFormProps) => {
	const { isSignIn }= useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthUser>({
    mode: "onChange",
    shouldUnregister: false,
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async(data: AuthUser) => {
    console.log("Submitted Data", data);
		await isSignIn(data);
		onSuccess();
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)} >
      <FormTitle title={ 'Sign Up' } />
      <ContentAreaWrapper>
        <InputField
          id   = { 'userName' }        
          type = { 'text' }
          size = { 'medium' }
          label= { 'ユーザ名' }
          error= { errors.userName }
          registration= { register('userName') }      
        />
        <InputField
          id   = { 'password' }
          type = { 'password' }
          size = { 'medium' }
          label= { 'パスワード' }
          error= { errors.password }
          registration= { register('password') }
        />
        <Button type="submit">Sign In</Button>        
      </ContentAreaWrapper>
      <NavDiscription >
        Already have an account?
        <Link to='../sign-in'>Sign in</Link>
      </NavDiscription>
    </FormStyle>
  );
};