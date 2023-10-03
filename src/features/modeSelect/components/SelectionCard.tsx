import { Button } from '@/components/Elements';
import { colors } from '@/assets/styles';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const _SelectionCard= styled.div`
  width : 100%;
  height: 30vh;
  position: relative;
  padding : 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  backdrop-filter: blur(6px);
  transition: all 0.5s;

  &::before,
  &::after {
    content : '';
    position: absolute;
    height  : 100%;
    width   : 100%;    
  };

  &::before {
    background: black;
    z-index   : -1;
    clip-path: polygon(1% 15%, 98% 5%, 94% 98%, 6% 94%);
  };

  &::after {
    background: ${ colors.bgLighter };
    z-index   : -2;
    clip-path: polygon(0 10%, 100% 3%, 97% 100%, 4% 96%);
  };
`;

const _SelectionCardContainer= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const _SelectionCardTitle= styled.div`
  height         : 8rem;
  width          : 30rem;
  position       : absolute;
  top            : -20px;
  display        : flex;
  align-items    : center;
  justify-content: center;

  &::before,
  &::after
  {
    content: '';
    width : 100%;
    height: 100%;
    position: absolute;
  };

  &::before {
    background: ${ colors.bgLighter };
    clip-path : polygon(5% 8%, 93% 14%, 95% 88%, 10% 90%);
    z-index: 2;
  };

  &::after{
    background: black;
    clip-path: polygon(3% 5%, 100% 0%, 97% 100%, 6% 95%);
    z-index  : 1;
  }

  > h1 {
    font-size: 3rem;
    color    : ${ colors.bgDarker };
    z-index  : 10;
  }
`;

const _ImageContainer= styled.div`
  margin: 20px 0 20px 20px;
  width : 40%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 150px;
  };
`;

const _SelectionCardDescription= styled.div`
  margin : 10px 40px;
  height : 100%;
  width  : calc(100% - 100px);
  position: relative;
  display: flex;
  align-items: center;

  &::before,
  &::after {
    content : '';
    position: absolute;
    height  : 100%;
    width   : 100%;
  };
/* 
  &::before {
    background: #000000;
    clip-path: polygon(4% 0, 97% 7%, 100% 92%, 0 95%);
    z-index: -2;
  };

  &::after {
    background: #ffffff;
    clip-path: polygon(0 0, 100% 6%, 99% 92%, 2% 90%);
    z-index: -1;
  }; */

  > p {
    font-size   : 1.8rem;
    font-weight : 600;
    color       : ${ colors.bgLighter };
    word-spacing: 10px;  
  }
`;


type SelectionCardProps= {
  id: string;
  title: string;
  imgPath?: string | undefined;
  description: string; 
  children: React.ReactNode;
}

export const SelectionCard= (
  { 
    title, 
    imgPath, 
    description,
    children
  }: SelectionCardProps
) => {
  const navigate= useNavigate();

  return (
    <_SelectionCard >
      <_SelectionCardContainer>
        <_SelectionCardTitle>
          <h1>{title}</h1>
        </_SelectionCardTitle>
        <_ImageContainer>
          <img src={imgPath} />
        </_ImageContainer>
        <_SelectionCardDescription>
          <p>{description}</p>
        </_SelectionCardDescription>
        {children}
      </_SelectionCardContainer>
    </_SelectionCard>
  );
}