import styled from 'styled-components';
import { FieldError } from 'react-hook-form';

import { colors } from '@/styles/colors';

type FieldWrapperProps= {
  label?: string;
  children?: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps= Omit<FieldWrapperProps, 'children'>;

const FieldLabelStyle= styled.label`
  font-size: 1.75rem;
  color: ${colors.greyAccent};
` ;

const ErrorMessageStyle= styled.div`
  font-size: 1.75rem;
  color: ${colors.error};
`;

export const FieldWrapper= (props: FieldWrapperProps) => {
  const { label, error, children }= props;

  return (
    <div>
      <FieldLabelStyle>
        {label}
        <div>{children}</div>
      </FieldLabelStyle>
      {error?.message && (
        <ErrorMessageStyle role='alert' aria-label={error.message}>
          {error.message}
        </ErrorMessageStyle>
      )}
    </div>
  );
};