import { colors } from '@/assets/styles';
import styled, { css } from 'styled-components';

const _CheckBoxList= styled.ul`
  height: 100%;
  width : 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(12rem, 1fr)
  );
  grid-template-rows: repeat(
    auto-fill,
    minmax(10rem, 1fr)
  );
`;

const _CheckBoxItem= styled.li`
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
        background: #141414;
        `
    }    
  }
`;

const _CheckBoxLabel= styled.label`
  font-size: 2rem;
  z-index  : 10;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${_CheckBox}:checked {
    color:white;
  }
`;

type CheckBoxListProps= {
  label?: string | undefined;
  values: Array<string>;
  checked: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBoxList= (
  {     
    label, 
    values, 
    checked, 
    onChange, 
    ...props
  }: CheckBoxListProps
) => {
  return (
    <_CheckBoxList>
      { 
        values.map(( value, index ) => (
          <_CheckBoxItem key={ index }>
            <_CheckBox 
              id={`id_${index}`}
              type='checkbox'
              value={ value }
              checked={ checked === value}
              onChange={ onChange }
              {...props} 
            />        
            <_CheckBoxLabel htmlFor={`id_${index}`} >
              { value }        
            </_CheckBoxLabel>
          </_CheckBoxItem>
        ))
      }
    </_CheckBoxList>
  );
};