import styled, { css } from 'styled-components';

type GridProps= {
  gridTemplateColumns?: string | object | undefined;
  gridTemplateRows   ?: string | object | undefined;

  gap      ?: string | undefined,
  columnGap?: string | undefined,
  rowGap   ?: string | undefined,

  children: React.ReactNode;
};

type GridItemProps= {
  column ?: string | object | undefined;
  row    ?: string | object | undefined;
  children: React.ReactNode;
};

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

const _Grid= styled.div<GridProps>`
  display: grid;

  ${(props) => 
    css`
      grid-template-columns: ${ formatGridValue(props.gridTemplateColumns) };
      grid-template-rows   : ${ formatGridValue(props.gridTemplateRows) };
      gap       : ${ props.gap };
      column-gap: ${ props.columnGap };
      row-gap   : ${ props.rowGap };       
    `
  }
`;

const _GridItem= styled.div<GridItemProps>`
  ${(props) => 
    css`
      grid-column: ${ formatGridValue(props.column) };
      grid-row   : ${ formatGridValue(props.row) };
    `
  }
`;

export const Grid= (
  {
    gridTemplateColumns,
    gridTemplateRows,
    gap,
    columnGap,
    rowGap,
    children,
  }: GridProps
) => {
  return (
    <_Grid
      gridTemplateColumns= { gridTemplateColumns }
      gridTemplateRows   = { gridTemplateRows }
      gap      = { gap }
      columnGap= { columnGap }
      rowGap   = { rowGap }
    >
      { children }
    </_Grid>
  );
};

export const GridItem= (
  {
    column,
    row,
    children
  }: GridItemProps
) => {
  return (
    <_GridItem
      column= { column }
      row   = { row }
    >
      { children }
    </_GridItem>
  );
};