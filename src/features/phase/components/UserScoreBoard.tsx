import styled, { css } from 'styled-components';

const _UserBoardWrapper= styled.div`
  height: 100%;
  width : 40rem;
  position  : relative;
  background: transparent;
`;

const _UserIconArea= styled.div`
  height: 100%;
  width : 20rem;
  position  : absolute;
  background: #000000;
  z-index: 10;
  ${(props) => props.status === 'HOST'
      ? css` left : 0px`
      : css` right: 0px`
  }  
`;

const _UserIcon= styled.img`
  width  : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _UserScoreWrapper= styled.div`
  height: 8rem;
  width : calc(100% - 10px);
  display: flex;
  align-items: center;        
  position  : relative;
  background: black;
  ${(props) => props.status === 'HOST'
    ? css`
        padding-right: 20px;  
        justify-content: end;
        transform: rotate(-5deg);
        box-shadow: 8px 8px #2F1FF6;
      `
    : css`
        padding-left: 20px;  
        justify-content: start;
        transform: rotate(5deg);
        box-shadow: 8px 8px #CA1C1C;
      `
  }
`;

const _UserScore= styled.h1`
  position: absolute;
  font-size: 5rem;
  color: white;
  z-index: 10;

  > span {
    margin-left: 10px;
    font-size: 3rem;
  }
`;

const _UserNameWrapper= styled.div`
  position : relative;
  bottom   : 0;

  &::before {
    position: absolute;
    content : '';
    height  : 7.5rem;
    width   : 70%;
    
    ${(props) => props.status === 'HOST'
      ? css`
        left: 0;
        background: #2F1FF6`
      : css`
        right: 0;
        background: #CA1C1C`
    };
  }  
  &::after {
    background: black;
    height: 6.5rem;
    width : calc(70% - 3rem);
    display: block;
    position: absolute;
    content: '';
    z-index: 100;

    ${(props) => props.status === 'HOST'
      ? css`
        left: 0;
        clip-path: polygon(0 70%, 100% 0, 100% 100%, 0% 100%)`
      : css`
        right: 0;
        clip-path: polygon(0 0, 100% 70%, 100% 100%, 0% 100%);`
    }
  }
`;

const _UserName= styled.h1`
  position : absolute;
  font-size: 3.5rem;
  color    : white;
  z-index  : 999;

  ${(props) => props.status === 'HOST'
      ? css`
          top  : 0px;  
          right: 10%;
          transform: translateX(-100%) rotate(-5deg);
        `
      : css`
        top : 0px;  
        left: 10%;
        transform: translateX(100%) rotate(5deg);
        `
    }
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
      <_UserScoreWrapper status={status}>
        <_UserScore>
          { score }
          <span>pt</span>
        </_UserScore>
      </_UserScoreWrapper>
      <_UserNameWrapper status={status} >
        <_UserName status={status} >{ name }</_UserName>
      </_UserNameWrapper>
    </_UserBoardWrapper>
  );
};