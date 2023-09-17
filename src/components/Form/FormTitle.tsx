import styled from 'styled-components';

import { colors } from '@/assets/styles';

<<<<<<< HEAD
type FormTitleProps= {
  title?: string;
};

const FormTitleStyle= styled.h1`
=======
const _FormTitle= styled.h1`
>>>>>>> a76ffb114326a6370828c7a550356847a40b688e
  font-size: 3.75rem;
  font-weight: 700;
  color: ${colors.bgLighter}
`;

<<<<<<< HEAD
export const FormTitle= ({ title }: FormTitleProps) => {
=======
type FormTitleProps= {
  title?: string
};

export const FormTitle= (props: FormTitleProps) => {
  const { title }= props;

>>>>>>> a76ffb114326a6370828c7a550356847a40b688e
  return (
    <_FormTitle>{title}</_FormTitle>
  );
};