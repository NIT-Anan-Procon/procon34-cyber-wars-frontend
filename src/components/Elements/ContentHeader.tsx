import styled from 'styled-components';

const _ContentHeader= styled.div`
  height : 8rem;
  width  : 20rem;
  display : flex;
  justify-content: center;
  align-items    : center;
  background: #17f1bb;
  transform : rotate(5deg);
  z-index: 1;
  > span {
    font-size  : 3.45rem;
    font-weight: bolder;
    color      : #ffffff;
    transform  : rotate(-10deg);
    border-bottom: 3px solid #706d6d;
    z-index    : 2;
  }
  &::before {
    content   : '';
    position  : absolute;
    inset     : 0;
    height    : 8rem;
    width     : 20rem;  
    background: #000000;
    transform : rotate(-10deg);
    z-index   : -10;
  }
`;

type ContentHeaderProps= {
  title: string;
};

export const ContentHeader= ({ title }: ContentHeaderProps) => {
  return (
    <_ContentHeader>
      <span>{ title }</span>
    </_ContentHeader>
  );
};