import { colors } from "@/styles";
import styled from "styled-components";

const _FormTitle= styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  color: ${colors.bgLighter}
`;

type FormTitleProps= {
  title?: string
};

export const FormTitle= (props: FormTitleProps) => {
  const { title }= props;

  return (
    <_FormTitle>{title}</_FormTitle>
  );
};