import { colors } from '@/assets/styles';
import styled, { css } from 'styled-components';

const _CheckBoxItem= styled.div`
  height: 5rem;
  width: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _CheckBox= styled.input`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  &::before, 
  &::after {
    content: "";
    display: block; 
    position: relative;
  }

  &::before {
    height: 5rem;
    width : 10rem;
    border-radius: 10px;
    
    ${(props) => props.checked
      ? css`
          box-shadow: 3px 3px 1.5px #a0e5dd, -3px -3px 1.5px #a0e5dd, -3px 3px 1.5px #a0e5dd, 3px -3px 1.5px #a0e5dd;
          background: ${ colors.primary };
        `
      : css`
        background: ${ colors.bgLighter };
        `
    }    
  }
`;

const _CheckBoxLabel= styled.label`
  font-size: auto;
  z-index  : 10;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  ${_CheckBox}:checked {
    color:white;
  }
`;

type CheckBoxProps= {
  id      : string;
  value  ?: string;
  label   : string;
  checked : boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBox= (
  {     
    id,
    value,
    label, 
    checked, 
    onChange, 
    ...props
  }: CheckBoxProps
) => {
  return (
    <_CheckBoxItem {...props} >
      <_CheckBox 
        id      = { id }
        type    = 'checkbox'
        value   = { value }
        checked = { checked }
        onChange= { onChange }
        {...props} 
      />        
      <_CheckBoxLabel htmlFor={ id } >
        { label }        
      </_CheckBoxLabel>
    </_CheckBoxItem>
  );
};