import { colors } from '@/styles';
import styled from 'styled-components';

const StyledCard= styled.div`
  width: clamp(50rem, 50vw, 60rem);
  height: clamp(50rem, 60vh, 65rem);
  padding: 5rem;
  background: grey;
  box-sizing: border-box;
  background: ${colors.bgLighter};
  border: 3px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  cursor: pointer;
  transition: all 0.5s;
`;

const CardContainer= styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 15% 1fr 30%;
`;

const CardTitle= styled.h1`
  grid-row: 1;
  font-size: 3rem;
  font-weight: 600;
  text-align : center;
`;

const ImageContainer= styled.div`
  grid-row: 2;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardDescription= styled.p`
  grid-row: 3;
  font-size  : 1.5rem;
  font-weight: 500;
  color      : #808080;
`;


type SelectionCardProps= {
  id: string;
  title: string;
  imgPath?: string | undefined;
  description: string;  
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  active?: boolean;
}

export const SelectionCard= (
  { 
    id,
    title, 
    imgPath, 
    description,
    onClick, 
    active,
    ...props 
  }: SelectionCardProps
) => {
  return (
    <StyledCard id={id} onClick={onClick} {...props} >
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <ImageContainer>
          image
          <img src={imgPath} />
        </ImageContainer>
        <CardDescription>{description}</CardDescription>
      </CardContainer>
    </StyledCard>
  );
}