import styled          from "styled-components";
import { Link }        from "react-router-dom";
import { useForm }     from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth }               from "@/libs/auth";
import { FormTitle, InputField } from "@/components/Form";
import { Button }                from '@/components/Elements/Button';
import { AuthUser, FormSchema }  from "..";


type SignUpFormProps = {
	onSuccess: () => void;
};

const FormStyle= styled.form`
  width         : clamp(40rem, 40vw, 60rem);
  height        : 80%;
  display       : flex;
  flex-direction: column;
  row-gap       : 1rem;
  background    : white;
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
      <>
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
      </>
      <Button type="submit">送信</Button>
      <p>
        Already have an account?
        <Link to='../sign-in'>Sign in</Link>
      </p>
    </FormStyle>
  );
};