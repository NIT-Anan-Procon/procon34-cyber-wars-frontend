
type CheckBoxGroupProps= {
  id: string;
  label: string;
  values: Array<string>;
  selected: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBoxGroup= (
  {     
    id, 
    label, 
    values, 
    selected, 
    onChange, 
    ...props
  }: CheckBoxGroupProps
) => {
  return (
    <>
    </>
  );
};