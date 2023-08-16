import styled from "styled-components";

const FlexColumnLayout= styled.div`
  height : 100%;
  width  : 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 10%;
`;

const ContentWrapper= styled.div`
  width : 100%;
  height: 100%;
  padding: 3rem 20% 3rem 20%;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
`;

type LayoutProps= {
  children: React.ReactNode;
};

export const Layout= ({ children }: LayoutProps) => {
  return (
    <FlexColumnLayout>
      <ContentWrapper>{children}</ContentWrapper>
    </FlexColumnLayout>
  );
};