import styled         from 'styled-components';
import { FieldError } from 'react-hook-form';

import { colors } from '@/assets/styles/colors';

type FieldWrapperProps= {
  label   ?: string;
  children?: React.ReactNode;
  error   ?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps= Omit<FieldWrapperProps, 'children'>;

const FieldWrapperStyle= styled.div`
  width: 100%;
`;

const FieldLabelStyle= styled.label`
  font-size: 1.75rem;
  color    : rgba(156, 163, 175, 1);
` ;

const ErrorMessageStyle= styled.div`
  margin     : 0  0 -2rem 1.5rem;
  font-size  : 1.25rem;
  line-height: 2rem;
  color      : ${colors.danger};
`;

export const FieldWrapper= (props: FieldWrapperProps) => {
  const { label, error, children }= props;

  return (
    <FieldWrapperStyle>
      <FieldLabelStyle>
        { label }
        <div>{ children }</div>
      </FieldLabelStyle>
      { error?.message && (
        <ErrorMessageStyle >
          { error.message }
        </ErrorMessageStyle>
      )}
    </FieldWrapperStyle>
  );
};