import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _UserCard= styled.div`
  height  : 20rem;
  width   : 100%;
  padding : 2rem;
  position: relative;
  background: #04d1d8;
  display : grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows   : 30% 1fr;
  gap: 1rem;
`;

const _UserIconWrapper= styled.div<{ ishost: boolean }>`
  grid-column: 1;
  grid-row   : 1 / span 2;
  width : 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid     
    ${(props) => props.ishost
      ? colors.blueAccent
      : colors.redAccent
    };
  z-index: 1;
  &::before {
    content: '';
    box-shadow: 10px 10px white;
  }
`;

const _UserIcon= styled.img`

`;

const _StatusTag= styled.span`
  grid-column: 2;
  grid-row   : 1;
  display: block;
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  font-size: 2.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    /* padding: 10px;
    position: absolute;
    content: "";
    top: 0px;
    left: 100px;
    border-top: 3px solid #333;
    z-index: -1; */
  }
`;

const _UserNameFeild= styled.span`
  grid-column: 2;
  grid-row   : 2;
  height : 100%;   
  width  : 100%;
  display: block;
  align-items: center;
  background: black;
  color: white;
  font-size: 4rem;
`;

type UserStatusCardProps= {
  userName: string;
  ishost  : boolean;
}

export const UserStatusCard= ({ userName, ishost }: UserStatusCardProps) => {
  return (
    <_UserCard >
      <_UserIconWrapper ishost={ ishost } >
        {/* <_UserIcon src={} /> */}
      </_UserIconWrapper> 
        <_StatusTag >
          { ishost
            ? <span>HOST</span>
            : <span>GUEST</span>
          }
        </_StatusTag>
        <_UserNameFeild >{ userName }</_UserNameFeild>
    </_UserCard>
  );
}