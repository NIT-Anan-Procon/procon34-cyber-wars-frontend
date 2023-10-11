import styled from 'styled-components';

import { colors } from '@/assets/styles';

const _Description= styled.div`
  height: 30vh;
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 2.5rem;
    color    : ${ colors.bgLighter };    
  }
`;

type DescriptionProps= {
  description: string;
};

export const Description= ({ description }: DescriptionProps ) => {
  return (
    <_Description><p>{ description }</p></_Description>
  );
};