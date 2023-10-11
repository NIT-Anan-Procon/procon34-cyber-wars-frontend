import styled from 'styled-components';

import { colors } from '@/assets/styles';

const _Description= styled.div<{ styles?: string }>`
  height: 30vh;
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 2.8rem;
    color    : ${ colors.bgLighter };    
  }

  ${(props) => props.styles }
`;

type DescriptionProps= {
  description: React.ReactNode;
  styles    ?: string;
};

export const Description= ({ description, styles }: DescriptionProps ) => {
  return (
    <_Description styles={ styles } ><p>{ description }</p></_Description>
  );
};