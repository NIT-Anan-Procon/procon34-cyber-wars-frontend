import styled from 'styled-components';

const _UserBoardWrapper= styled.div`
  height: 100%;
  width : 40rem;
  position  : relative;
  background: #afafaff3;
`;

const _UserIconArea= styled.div`
  height: 100%;
  width : 15rem;
  position  : absolute;
  background: black;
`;

const _UserIcon= styled.img`
  width  : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _UserScoreWrapper= styled.div`

`;

const _UserScore= styled.h1`
  
`;

const _UserNameWrapper= styled.div`
  padding-right: 20px;
  position: relative;
  top: 100%;
  transform: translateY(-100%);

  &::before {
    position: absolute;
    bottom  : -10px;
    content : '';
    height  : 6rem;
    width   : 100%;
    clip-path: polygon(0 70%, 100% 0, 100% 100%, 0% 100%);
    background: 
      ${(props) => props.status === 'HOST'
        ? '#2F1FF6'
        : '#CA1C1C'
      }
    ;
  }  
  &::after {
    background: black;
    height: 6rem;
    width : 100%;
    display: block;
    content: '';
    clip-path: polygon(0 70%, 100% 0, 100% 100%, 0% 100%);
    z-index: 10;
  }
`;

const _UserName= styled.h1`
  position : absolute;
  top      : -10px;  
  right    : 40px;
  font-size: 4rem;
  color    : white;
  transform: rotate(-5deg);
  z-index  : 100;
`;

type UserScoreBoardProps= {
  name  : string;
  status: 'HOST' | 'GUEST';
  score : number;
};

export const UserScoreBoard= (
  {
    name,
    status,
    score 
  }: UserScoreBoardProps
) => {
  return (
    <_UserBoardWrapper>
      <_UserIconArea status={status} >
        <_UserIcon 
          src={''}
          alt=''
        />
      </_UserIconArea>
      <_UserScoreWrapper >
        <_UserScore>{ score }</_UserScore>
      </_UserScoreWrapper>
      <_UserNameWrapper status={status} >
        <_UserName>{ name }</_UserName>
      </_UserNameWrapper>
    </_UserBoardWrapper>
  );
};