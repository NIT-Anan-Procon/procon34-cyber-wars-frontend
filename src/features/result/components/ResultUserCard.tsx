import styled, { css } from 'styled-components';

const _ResultUserCard= styled.div`
  height: 30rem;
  width : 50rem;
  position  : relative;
  background: black;
  opacity: 0.7;
  
  ${(props) => props.result === 'WIN'
    ? css`

      `
    : css`

      `
  }
`;

const _ResultWrapper= styled.div`
  position: absolute;
  transform: translate(100%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #868686;

  ${(props) => props.result === 'WIN'
    ? css`
        height   : 12rem;
        width    : 25rem;
        font-size: 5rem;
        color    : white;
      `
    : css`
        height   : 8rem;
        width    : 20rem;
        font-size: 2rem;
        color    : #000000;
      `
  }
`;

const _UserIconWrapper= styled.div`
  height: 20rem;
  width : 20rem;
  background: #464646;
`;

const UserIcon= styled.div`

`;

const _UserName= styled.h1`
  font-size: 4.5rem;
  color : white;
`;

const _ResultScore= styled.div`
  position: absolute;
  bottom: 0;
  height: 10rem;
  width : 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4.5rem;
  color : white;
  background: #808080;
`;

type ResultUserCardProps= {
  name  : string;
  score : number;
  result: 'WIN' | 'LOSE'; 
};

export const ResultUserCard= (
  { 
    name, 
    score, 
    result 
  }: ResultUserCardProps
) => {
  return (
    <_ResultUserCard result={result}>
      <_ResultWrapper result={result} >
        <h1>{ result }</h1>
      </_ResultWrapper>
      <_UserIconWrapper>
        <UserIcon />
      </_UserIconWrapper>
      <_UserName>{ name }</_UserName>
      <_ResultScore>
        <span>Score</span>
        <h3>{ score }</h3>
      </_ResultScore>
    </_ResultUserCard>
  );
};