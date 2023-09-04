import styled from 'styled-components';

const _UserBoardsLayout= styled.div`
  grid-row: 2;
  height  : 100%;
  width   : 100vw;
  padding : 0 5vw;
  display : flex;
  align-items: start;
  justify-content: space-between;
`;

type UserBoardsLayoutProps= {
  children: React.ReactNode;
};

export const UserBoardsLayout= ({ children }: UserBoardsLayoutProps) => {
  return (
    <_UserBoardsLayout>{ children }</_UserBoardsLayout>
  );
};