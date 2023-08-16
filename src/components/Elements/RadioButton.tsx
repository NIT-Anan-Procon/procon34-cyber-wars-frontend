import { colors } from "@/styles";
import styled from "styled-components";


const RadioStyleDiv= styled.div`
  display : inline-block;
  position: relative;
  cursor  : pointer;
`;

const RadioStyle= styled.input`
  position: absolute;
  opacity : 0;
  width   : 0;
  height  : 0;
`;

const LabelStyle= styled.label`
  display      : inline-block;
  padding-left : 30px;
  margin-bottom: 10px;
  position     : relative;
  font-size    : 1.5rem;
  color        : ${colors.secondary};
  cursor       : pointer;
  transition   : all 0.3s cubic-bezier(0.23, 1, 0.320, 1);

  ${RadioStyle}:checked + & {
    color: ${colors.primary};
  }
`;

const RadioCircle= styled.span`
  position     : absolute;
  top          : 50%;
  left         : 0;
  transform    : translateY(-50%);
  width        : 20px;
  height       : 20px;
  border-radius: 50%;
  border       : 2px solid #555;
  transition   : all 0.3s cubic-bezier(0.23, 1, 0.320, 1);

  ${RadioStyle}:checked + ${LabelStyle} & {
    transform: translateY(-50%) scale(0.9);
    border   : 5px solid ${colors.primary};;
    color    : ${colors.primary};
  }

  ${LabelStyle}:hover & {
    transform   : translateY(-50%) scale(1.2);
    border-color: ${colors.primary};
    box-shadow  : 0 0 10px #20a192;    
  }
`;

type RadioButtonProps= {
  id: string;
  label: string;
  value: string;
  selected: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton= (
  { 
    id, 
    label, 
    value, 
    selected, 
    onChange, 
    ...props 
  }: RadioButtonProps
) => {
  return (
    <RadioStyleDiv>
      <RadioStyle
        id={id}
        type='radio'
        value={value}
        checked={selected === value}
        onChange={onChange}
        {...props}
      />
      <LabelStyle htmlFor={id}>
        <RadioCircle />
        {label}
      </LabelStyle>    
    </RadioStyleDiv>
  );
};