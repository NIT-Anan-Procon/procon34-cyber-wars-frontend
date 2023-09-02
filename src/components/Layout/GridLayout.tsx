import styled, { css } from 'styled-components';

type GridProps= {
  type: 'grid' | 'item';

  gridTemplateColumns?: string | object | undefined;
  gridTemplateRows   ?: string | object | undefined;

  columns?: string;
  rows   ?: string;
  
  gap      ?: string | undefined,
  columnGap?: string | undefined,
  rowGap   ?: string | undefined,

  children: React.ReactNode;
}

const formatGridValue = (value: string | object | undefined) => {
  if (typeof value === 'string') {
    return value;
  };
  if (typeof value === 'object') {
    const entries = Object.entries(value);
    const queries = entries.map(([key, val]) => `@media (min-width: ${key}) { ${val} }`);
    const result = queries.join('; ');
    return result;
  };
};

const StyledGridLayout= styled.div<GridProps>`
  ${(props) => props.type === 'grid' 
    ? 
      css`
        display: grid;
        grid-template-columns: ${ formatGridValue(props.gridTemplateColumns) };
        grid-template-rows   : ${ formatGridValue(props.gridTemplateRows) };
        gap       : ${ props.gap }
        column-gap: ${ props.columnGap }
        row-gap   : ${ props.rowGap }
      ` 
    : props.type === 'item' 
    ?
      css`
        grid-column: ${ props.columns };
        grid-row   : ${ props.rows }; 
      `
    :
      undefined
  };
`;

export const Grid= (
  {
    type,
    gridTemplateColumns,
    gridTemplateRows,
    columns,
    rows,
    gap,
    columnGap,
    rowGap,
    children,
  }: GridProps
) => {
  return (
    <StyledGridLayout
      type= { type }
      gridTemplateColumns= { gridTemplateColumns }
      gridTemplateRows   = { gridTemplateRows }
      columns  = { columns }
      rows     = { rows }
      gap      = { gap }
      columnGap= { columnGap }
      rowGap   = { rowGap }
    >
      { children }
    </StyledGridLayout>
  );
};
