import { colors } from "@/styles";
import styled from "styled-components";

type FormTitleProps= {
  title?: string
};

const FormTitleStyle= styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  color: ${colors.bgLighter}
`;

export const FormTitle= (props: FormTitleProps) => {
  const { title }= props;

  return (
    <FormTitleStyle>{title}</FormTitleStyle>
  );
};