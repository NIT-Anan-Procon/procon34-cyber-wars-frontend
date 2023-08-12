import styled          from "styled-components";
import { Link }        from "react-router-dom";
import { useForm }     from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth }               from "@/libs/auth";
import { FormTitle, InputField } from "@/components/Form";
import { Button }                from "@/components/Elements";
import { AuthUser, FormSchema }  from "..";


type SignInFormProps = {
	onSuccess: () => void;
};

const FormStyle= styled.form`
  width         : clamp(40rem, 40vw, 60rem);
  height        : 80%;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  row-gap       : 5rem;
  background    : white;
`;

const ContentAreaWrapper= styled.div`
  width         : 100%;
  padding       : 0% 5% 0% 5%;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  row-gap       : 5rem;
`;

export const SignInForm = ({onSuccess}: SignInFormProps) => {
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
      <FormTitle title={ 'Sign In' } />
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
      <p>
        Don't have account? 
        <Link to='../sign-up'>Sign up</Link>
      </p>
    </FormStyle>
  );
};
// import styled from 'styled-components';

// import {AuthUser, FormSchema} from '..';
// import {useAuth} from '@/libs/auth';
// import {Form, InputField} from '@/components/Form';
// import { Button } from '@/components/Elements';
// import { Link } from 'react-router-dom';

// type SignInFormProps = {
// 	onSuccess: () => void;
// };
// export const SignInForm = ({onSuccess}: SignInFormProps) => {
// 	const { isSignIn } = useAuth();

// 	const submitData= async(values: AuthUser): Promise<void> => {
// 		console.log(values);
// 		await isSignIn(values);
// 		onSuccess();
// 	}

// 	return (
// 		<div>
// 			<Form<AuthUser,  typeof FormSchema>		
// 				onSubmit={submitData}
// 				schema={FormSchema}
// 			>
// 				{({register, formState}) => (
// 					<>
// 						<InputField
// 							id= 'userName'
// 							type='text'
// 							label='ユーザ名'
// 							size='medium'
// 							error={formState.errors['userName']}
// 							registration={register('userName')}
// 						/>
// 						<InputField
// 							id= 'password'
// 							type='password'
// 							label='パスワード'
// 							size='medium'
// 							error={formState.errors['password']}
// 							registration={register('password')}
// 						/>
// 						<div>
//               <button type='submit'>signin</button>
//             </div>
// 					</>
// 				)}
// 			</Form>
//       <div>
//         <Link to='../sign-up' >
//           Sign up
//         </Link>
//       </div>
// 		</div>
// 	);
// };

