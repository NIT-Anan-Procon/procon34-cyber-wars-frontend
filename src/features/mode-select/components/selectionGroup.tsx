import { colors } from '@/styles';
import styled from 'styled-components';


const GroupLayout= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModeContentWrapper= styled.div`
  width: 100%;
  height: 100%;
`;

const ModeTitle= styled.h1`
  width: 100%;
  line-height: 3rem;
  font-size: 1.5rem;
  color: ${colors.secondary};
  border-bottom: 3px solid ${colors.secondary};
`;

const InputsLayout= styled.div`
  width  : 100%;
  height : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20%;
`;


type SelectionGroupProps= {
  title: string;
  children: React.ReactNode;
}


export const SelectionGroup= ({title, children}: SelectionGroupProps) => {
  return (
    <GroupLayout>
      <ModeContentWrapper>
        <ModeTitle>{title}</ModeTitle>
        <InputsLayout>
          {children}
        </InputsLayout>
      </ModeContentWrapper>
    </GroupLayout>
  );
}