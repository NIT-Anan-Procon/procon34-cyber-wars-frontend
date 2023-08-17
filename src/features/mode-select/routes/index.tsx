import { Head } from "@/components/Head";
import styled   from "styled-components";
import { SelectionCard } from "../components";
import { Header } from "@/components/Elements";
import { CARD_DESCRIPTION, MATCH_MODE_PATH, TRAIN_MODE_PATH } from "..";
import { useNavigate } from "react-router-dom";

const SelectionGrid= styled.div`
  height : 100%;
  width  : 100%;
  padding: 3rem 20%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows   : 10rem 1fr;
  column-gap: 5rem;
  row-gap   : 5rem;
`;

const HeaderContainer= styled.div`
  grid-row       : 1;
  grid-column    : 1 / span 2;
  width          : 100%;
  height         : 100%;
  display        : flex;
  justify-content: center;
  align-items    : center;
`;

const SelectionContainer= styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TrainSelectionCard= styled(SelectionCard)`
  grid-column: 1;
  grid-row   : 1;
`;

const MatchSelectionCard= styled(SelectionCard)`
  grid-column: 1;
  grid-row   : 2;
`;

export const ModeSelection= () => {
  const navigate= useNavigate();

  return (
    <>
      <Head title='モード選択画面' />
      <SelectionGrid>
        <HeaderContainer>
          <Header title='モード選択'/>
        </HeaderContainer>

        <SelectionContainer>
          <TrainSelectionCard 
            id= {'train_mode'}
            title='訓練モード'
            imgPath=''
            description={ CARD_DESCRIPTION.TRAIN_DESCRIPTION}
            buttonTitle='START TUTORIAL'
            navRoute= { TRAIN_MODE_PATH}
          />
        </SelectionContainer>  

        <SelectionContainer>
          <MatchSelectionCard 
            id={'match_mode'}
            title='対戦モード' 
            imgPath=''
            description={ CARD_DESCRIPTION.MATCH_DESCRIPTION }
            buttonTitle='START GAME'
            navRoute= { MATCH_MODE_PATH}
          />            
        </SelectionContainer>   
      </SelectionGrid>    
    </>
  );
};