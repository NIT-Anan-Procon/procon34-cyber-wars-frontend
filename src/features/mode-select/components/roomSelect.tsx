import { RoomModeValueState } from "@/atoms";
import { RadioButton } from "@/components/Elements/RadioButton";
import { InputField } from "@/components/Form";
import { useAtomValueChange } from "@/hooks/useAtomValueChange";
import { ROOM_MODES } from "../types";

export const RoomSelect= () => {
  const [ roomSelected, updateRoomSelected ]= useAtomValueChange(RoomModeValueState);
  
  return (
    <>    
      <RadioButton 
        id='create_room'
        label=' ルーム作成' 
        value={ROOM_MODES.CREATE_ROOM}
        selected={roomSelected}
        onChange={updateRoomSelected}
      />
      <RadioButton
        id='join_room'
        label='ルーム参加'
        value={ROOM_MODES.JOIN_ROOM}
        selected={roomSelected}
        onChange={updateRoomSelected}
      />           
      {
        roomSelected === ROOM_MODES.JOIN_ROOM 
        ?
          <InputField 	
            id='room_id'
            type='text'
            size='medium'
        />
        : undefined
      }
    </>
  )
}