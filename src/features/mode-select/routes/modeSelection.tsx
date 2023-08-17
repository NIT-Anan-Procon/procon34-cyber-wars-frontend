import { Head } from "@/components/Head";
import styled from "styled-components";
import { ModeSelect } from "../components";
import { Button } from "@/components/Elements";
import { useAtomValueChange } from "@/hooks/useAtomValueChange";
import { SelectedModeValueState } from "@/atoms";

const SelectionGrid= styled.div`
  height : 100%;
  width  : 100%;
  padding: 3rem 20%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 10rem 1fr 1fr;
`;

const TitleHeader= styled.div`
  grid-row: 1;
  grid-column: 1 / span 2;
  width: 100%;
  background:grey;
`;

const SelectionGridCard= styled.section`
  grid-column: 1;
  grid-row   : 2;
  height: 30rem;
  background:grey;
`;

const ButtonGridStyle= styled(Button)`
  grid-column: 2;
  grid-row   : 3;
`;

export const ModeSelection= () => {
  const [ modeSelected, updateModeSelected ]= useAtomValueChange(SelectedModeValueState);


  return (
    <>
      <Head title='モード選択画面' />
      <SelectionGrid>
        <Header>
          モード選択
        </Header>
        <SelectionGridCard>
          <ModeSelect />
        </SelectionGridCard>
        <SelectionGridCard>
          
        </SelectionGridCard>
        <ButtonGridStyle>START</ButtonGridStyle>
      </SelectionGrid>    
    </>
  );
};