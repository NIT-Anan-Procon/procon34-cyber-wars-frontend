import styled from "styled-components";

const FlexColumnLayout= styled.div`
  height : 100%;
  width  : 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper= styled.div`
  width : 100%;
  height: 100%;
  padding: 5rem 20% 3rem 20%;
  display: flex;
  flex-direction: column;
  row-gap: 10rem;
`;

type LayoutProps= {
  children: React.ReactNode;
};

export const SelectionLayout= ({ children }: LayoutProps) => {
  return (
    <FlexColumnLayout>
      <ContentWrapper>{children}</ContentWrapper>
    </FlexColumnLayout>
  );
};