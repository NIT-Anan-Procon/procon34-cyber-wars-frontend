import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { InputSizeProps } from '@/styles/dimensions';
import { colors } from '@/styles';

type InputFieldProps = FieldWrapperPassThroughProps & {
	id   : string;
	type?: 'text' | 'password';
	size : InputSizeProps;
	placeholder?: string;
	registration?: Partial<UseFormRegisterReturn>;
};

const InputFieldStyle = styled.input<InputFieldProps>`
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

export const InputField = (props: InputFieldProps) => {
	const { id, type, label, size, placeholder, error, registration } = props;

	return (
		<FieldWrapper
			label= { label }
			error= { error }
		>
			<InputFieldStyle
				id  = { id }
				type= { type }
				size= { size }
				placeholder={ placeholder}
				{ ...registration }
			/>
		</FieldWrapper>
	);
};