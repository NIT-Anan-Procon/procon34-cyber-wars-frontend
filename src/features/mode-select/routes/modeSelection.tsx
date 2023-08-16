import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { Head } from "@/components/Head";
import { SelectionLayout, ModeSelect, RoomModeSelect, SelectionGroup } from "../components";
import { Button } from "@/components/Elements";
import { SelectedModeValueState } from "@/atoms";
import { useNavigate } from "react-router-dom";
import { MATCH_MODE_PATH, MODES, TRAIN_MODE_PATH } from "../types";


const LogoHeader= styled.div`
  width : 100%;
  height: 15rem;
  background: grey;
`;

export const ModeSelection= () => {
  const navigate= useNavigate();
  const selectedMode= useRecoilValue<string>(SelectedModeValueState);

  const handleModeNavigate= (event: React.MouseEvent<HTMLButtonElement>) => {
    if(selectedMode === MODES.TRAIN_MODE) {
      navigate(TRAIN_MODE_PATH);
    } else {
      navigate(MATCH_MODE_PATH);
    }
  }

  return (
    <>
      <Head title='モード選択' />
      <SelectionLayout>
        <LogoHeader>Logo</LogoHeader>
        <SelectionGroup title={'モード選択'} >
          <ModeSelect />
        </SelectionGroup>
        { selectedMode === MODES.MATCH_MODE
          ?
            <SelectionGroup title={'ルーム選択'}>
              <RoomModeSelect />
            </SelectionGroup>        
          : undefined  
        }
        <Button onClick={handleModeNavigate}>
          Start
        </Button>
      </SelectionLayout>
    </>
  );
};