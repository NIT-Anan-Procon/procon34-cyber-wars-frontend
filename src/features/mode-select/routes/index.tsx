import { Head } from "@/components/Head";
import styled   from "styled-components";
import { SelectionCard } from "../components";
import { Button, Header } from "@/components/Elements";
import { SelectedModeValueState } from "@/atoms";
import { CARD_DESCRIPTION, MATCH_MODE_PATH, MODES, TRAIN_MODE_PATH } from "..";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const SelectionGrid= styled.div`
  height : 100%;
  width  : 100%;
  padding: 3rem 20%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows   : 10rem 1fr 1fr;
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
  background: ${({ active }) => (active ? '#020202' : 'white')};
  border-color: ${({ active }) => (active ? '#999' : '#ccc')};
`;

const MatchSelectionCard= styled(SelectionCard)`
  grid-column: 1;
  grid-row   : 2;
  background: ${({ active }) => (active ? '#020202' : 'white')};
  border-color: ${({ active }) => (active ? '#999' : '#ccc')};
`;

const ButtonGridStyle= styled(Button)`
  grid-column: 2;
  grid-row   : 3;
`;

export const ModeSelection= () => {
  const navigate= useNavigate();
  const [activeTab, setActiveTab] = useRecoilState(SelectedModeValueState);

  const handleSelectMode = (e: React.MouseEvent<HTMLDivElement>) => {
    setActiveTab(e.currentTarget.id);
  };

  const handleNavMode= () => {
    if(activeTab == MODES.TRAIN_MODE) {
      navigate(TRAIN_MODE_PATH)
    } else {
      navigate(MATCH_MODE_PATH)
    }
  }

  return (
    <>
      <Head title='モード選択画面' />
      <SelectionGrid>
        <HeaderContainer>
          <Header title='モード選択'/>
        </HeaderContainer>

        <SelectionContainer>
          <TrainSelectionCard 
            id= {MODES.TRAIN_MODE}
            title='訓練モード'
            imgPath=''
            description={ CARD_DESCRIPTION.TRAIN_DESCRIPTION}
            active= {activeTab === MODES.TRAIN_MODE}
            onClick={handleSelectMode}
          />
        </SelectionContainer>  

        <SelectionContainer>
          <MatchSelectionCard 
            id={MODES.MATCH_MODE}
            title='対戦モード' 
            imgPath=''
            description={ CARD_DESCRIPTION.MATCH_DESCRIPTION }
            active= {activeTab === MODES.MATCH_MODE}
            onClick={handleSelectMode}
          />            
        </SelectionContainer>   
          
        <ButtonGridStyle onClick={handleNavMode}>START</ButtonGridStyle>
      </SelectionGrid>    
    </>
  );
};