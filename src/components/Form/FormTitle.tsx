import styled from 'styled-components';

import { colors } from '@/assets/styles';

type FormTitleProps= {
  title?: string;
};

const FormTitleStyle= styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  color: ${colors.bgLighter}
`;

export const FormTitle= ({ title }: FormTitleProps) => {
  return (
    <FormTitleStyle>{title}</FormTitleStyle>
  );
};