import styled         from 'styled-components';
import { FieldError } from 'react-hook-form';

import { colors } from '@/styles/colors';

const _FieldWrapper= styled.div`
  width: 100%;
`;

const _FieldLabel= styled.label`
  font-size: 1.75rem;
  color    : rgba(156, 163, 175, 1);
` ;

const _ErrorMessage= styled.div`
  margin     : 0  0 -2rem 1.5rem;
  font-size  : 1.25rem;
  line-height: 2rem;
  color      : ${colors.danger};
`;

type FieldWrapperProps= {
  label   ?: string;
  children?: React.ReactNode;
  error   ?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps= Omit<FieldWrapperProps, 'children'>;

export const FieldWrapper= (props: FieldWrapperProps) => {
  const { label, error, children }= props;

  return (
    <_FieldWrapper>
      <_FieldLabel>
        { label }
        <div>{ children }</div>
      </_FieldLabel>
      { error?.message && (
        <_ErrorMessage >
          { error.message }
        </_ErrorMessage>
      )}
    </_FieldWrapper>
  );
};