import styled from 'styled-components';

const _UserBoardsLayout= styled.div`
  height  : 100%;
  width   : 100%;
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