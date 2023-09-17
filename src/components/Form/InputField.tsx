import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { InputSizeProps } from '@/assets/styles/dimensions';
import { colors }         from '@/assets/styles';

<<<<<<< HEAD
type InputFieldProps = FieldWrapperPassThroughProps & {
	id   : string;
	type?: 'text' | 'password';
	value?: string;
	size : InputSizeProps;
	placeholder ?: string;
	onChange    ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	registration?: Partial<UseFormRegisterReturn>;
};

const InputFieldStyle = styled.input<InputFieldProps>`
=======
const _InputField = styled.input<InputFieldProps>`
>>>>>>> a76ffb114326a6370828c7a550356847a40b688e
  width        : 100%;
	line-height  : 2.75rem;
	font-size    : 1.75rem;
  border-radius: 0.8rem;
  border       : 2px solid rgba(55, 65, 81, 1);
  outline      : 0;
  background   : #1E1E1E;
  padding      : 0.75rem 1.5rem;
  color        : rgba(243, 244, 246, 1);

	&:focus {
		border-color: ${colors.primary};
		transition: 0.5s;
	}
`;

<<<<<<< HEAD
export const InputField = (
	{ 
		id, 
		type, 
		label,
		size,
		value,
		placeholder, 
		error, 
		...props
	}: InputFieldProps
) => {
=======
type InputFieldProps = FieldWrapperPassThroughProps & {
	id   : string;
	type?: 'text' | 'password';
	size : InputSizeProps;
	placeholder?: string;
	registration?: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
	const { id, type, label, size, placeholder, error, registration } = props;

>>>>>>> a76ffb114326a6370828c7a550356847a40b688e
	return (
		<FieldWrapper
			label= { label }
			error= { error }
		>
			<_InputField
				id  = { id }
				type= { type }
				value={ value }
				size= { size }
				placeholder={ placeholder}
				{ ...props }
			/>
		</FieldWrapper>
	);
};
