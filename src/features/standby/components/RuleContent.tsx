import styled from "styled-components";

const RuleContentStyle= styled.div`
  width: 100%;
  height: 5rem;
  background: grey;
`;

type RuleContentProps= { 
  children: React.ReactNode;
}

export const RuleContent= ({ children }: RuleContentProps) => {
  return (
    <RuleContentStyle>
      {children}
    </RuleContentStyle>
  );
};