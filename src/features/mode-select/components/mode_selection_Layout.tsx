import styled from "styled-components";

const FlexColumnLayout= styled.div`
  height : 100%;
  width  : 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper= styled.div`

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