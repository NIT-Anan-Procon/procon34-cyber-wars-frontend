import styled from "styled-components";

const LabelStyle= styled.label`
  display: inline-block;
  padding-left: 30px;
  margin-bottom: 10px;
  position: relative;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  /* display: flex;
  align-items: center;
  padding: 0.5em;
  margin-bottom: 0.5em;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.2s, border 0.2s;
  &:hover {
    background: #e6e6e6;
  }  */
`;
const RadioStyleDiv= styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

const RadioStyle= styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  /* position: absolute;
  opacity : 0;
  &:checked + ${LabelStyle} {
    background-color: #ffc3c3;
    border-color: #ff1111;
  }
  &:focus + ${LabelStyle} {
    outline: 2px solid #ff1111;
  } */
`;

const RadioCircle= styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #555;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  ${RadioStyle}:checked + ${LabelStyle} & {
    transform: translateY(-50%) scale(0.9);
    border: 5px solid #4c8bf5;
    color: #4c8bf5;
  }
  ${RadioStyle}:checked + ${LabelStyle} {
    color: #4c8bf5;
  }
  ${LabelStyle}:hover & {
    transform: translateY(-50%) scale(1.2);
    border-color: #4c8bf5;
    box-shadow: 0 0 10px #4c8bf580;
  }
  /* display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid #888;
  border-radius: 50%;
  margin-right: 0.5em;
  transition: border-color 0.2s;
  position: relative; */
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
        <RadioCircle>{label}</RadioCircle>
      </LabelStyle>    
    </RadioStyleDiv>
  );
};