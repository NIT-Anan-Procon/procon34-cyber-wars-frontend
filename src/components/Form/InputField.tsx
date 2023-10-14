import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { colors }         from '@/assets/styles';


const _InputField = styled.input<InputFieldProps>`
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
		transition  : 0.5s;
	}
`;

type InputFieldProps = FieldWrapperPassThroughProps & {
	id     : string;
	type  ?: 'text' | 'password';
	value ?: string | number;
	styles?: string;
	placeholder ?: string;
	onChange    ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	registration?: Partial<UseFormRegisterReturn>;
	defaultValue?: string | number;
};

export const InputField = (
	{ 
		id, 
		type, 
		label,
		styles,
		value,
		placeholder,
		error,
		onChange,
		registration,
		defaultValue,
	}: InputFieldProps
) => {
	return (
		<FieldWrapper
			label= { label }
			error= { error }
			styles= { styles }
		>
			<_InputField
				id    = { id }
				type  = { type }
				value = { value }
				styles= { styles }
				placeholder = { placeholder}
				defaultValue= { defaultValue }
				onChange={ onChange }
				{ ...registration }
			/>
		</FieldWrapper>
	);
};
