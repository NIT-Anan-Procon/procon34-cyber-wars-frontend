import styled from 'styled-components';

const _Description= styled.p`
  font-size: 2rem;
`;

type RuleDescriptionProps= {
  children: React.ReactNode;
}

export const RuleDescription= ({ children }: RuleDescriptionProps) => {
  return (
    <_Description>{ children }</_Description>
  );
};