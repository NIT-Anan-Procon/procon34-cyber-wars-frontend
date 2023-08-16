import { RadioButton } from "@/components/Elements/RadioButton";
import { useValueChange } from "@/hooks/useValueChange";
import { InputField } from '@/components/Form/InputField';

export const ModeSelect= () => {
  const [ modeSelected, updateModeSelected ]= useValueChange('train');
  const [ roomSelected, updateRoomSelected ]= useValueChange('create_room');

  return (
    <>
      <RadioButton 
        label='訓練モード' 
        value='train'
        selected={modeSelected}
        onChange={updateModeSelected}
      />
      <RadioButton
        label='対戦モード'
        value='match'
        selected={modeSelected}
        onChange={updateModeSelected}
      />
      {
        modeSelected === 'match' 
        ?
          <>
            <RadioButton 
              label=' ルーム作成' 
              value='create_room'
              selected={roomSelected}
              onChange={updateRoomSelected}
            />
            <RadioButton
              label='ルーム参加'
              value='join_room'
              selected={roomSelected}
              onChange={updateRoomSelected}
            />           
          </>
        : undefined
      }
      {
        roomSelected === 'join_room' 
        ?
          <InputField 	
            id='room_id'
            type='text'
            size='medium'
        />
        : undefined
      }
    </>
  );
}