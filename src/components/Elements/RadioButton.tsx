import styled from "styled-components";

type RadioButtonProps= {
  label: string,
  value: string,
  selected: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton= ({ label, value, selected, onChange, ...props }: RadioButtonProps) => {
  return (
    <label>
      <input 
        type='radio'
        value={value}
        checked={selected === value}
        onChange={onChange}
        {...props}
      />
      {label}
    </label>
  );
};