import styled, { css } from 'styled-components';

const _ResultUserCard= styled.div<ResultUserCardProps>`
  display   : flex;
  background: black;
  opacity   : 0.7;

  &::before {
    position: absolute;
    content : '';
  }

  ${(props) => props.userType === 'MYUSER'
    ? css`
        height    : 30rem;
        width     : 100rem;
        font-size : 5rem;
      `
    : css`
        height    : 20rem;
        width     : 50rem;
        font-size : 2rem;
        transform : translateX(50%);
      `
  }
`;

const _UserWrapper= styled.div`

`;

const _UserIconWrapper= styled.div`
  height: 70%;
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #464646;
`;

const UserIcon= styled.div`
  width: 100%;
`;

const _UserName= styled.h1`
  width    : 6em;
  display    : flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35em;
  color    : white;
`;

const _ResultScore= styled.div`
  height: 100%;
  width : 100%;
  padding-left: 20px;
  position: relative;
  display: flex;
  flex-direction : column;
  justify-content: center;
  font-size: 1.5em;
  color : white;
  background: #808080;
  
  > span {
    font-size: 0.75em;
  }

  > h3 {
    display: flex;
    justify-content: center;
    font-size: 2em;
  }
`;

type ResultUserCardProps= {
  name    : string;
  score   : number;
  result  : 'WIN' | 'LOSE';
  userType: 'MYUSER' | 'OPPONENTUSER';
};

export const ResultUserCard= (
  { 
    name, 
    score, 
    result,
    userType
  }: ResultUserCardProps
) => {
  return (
    <_ResultUserCard userType={userType} >
      <_UserWrapper>
        <_UserIconWrapper>
          <UserIcon />
        </_UserIconWrapper>
        <_UserName>{ name }</_UserName>        
      </_UserWrapper>
      <_ResultScore>
        <span>Score</span>
        <h3>{ score }</h3>
      </_ResultScore>
    </_ResultUserCard>
  );
};