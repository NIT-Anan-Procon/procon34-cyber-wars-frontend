import styled from 'styled-components';

const _CheckBoxList= styled.ul`
  
`;

type CheckBoxListProps= {
  label: string;
  values: Array<string>;
  selected: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBoxList= (
  {     
    label, 
    values, 
    selected, 
    onChange, 
    ...props
  }: CheckBoxListProps
) => {
  return (
    <_CheckBoxList>
      { 
        values.map(( value, index ) => (
          <li key={ index }>
            <input 
              type='checkbox'
              value={ value }
              checked={ selected === value}
              onChange={ onChange }
              {...props} 
            />           
          </li>
        ))
      }
    </_CheckBoxList>
  );
};