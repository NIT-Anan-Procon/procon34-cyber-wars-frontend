import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import { RadioButton } from "@/components/Elements/RadioButton";
import { InputField } from "@/components/Form";
import { ROOM_MODES } from "../../modeSelect/types";
import { useAtomValueChange } from "@/hooks/useAtomValueChange";

const InputStyle= styled.div`
  position: relative;
`;

const InputFieldStyle= styled.div`
  position: absolute;
  width   : 30rem;
  bottom  : -45px;
`;

const RoomIdSchema= z.object({
  roomId: 
    z
      .string()
      .nonempty('入力は必須です。')
      .regex(/^\d{4}$/, '4桁の数値で入力してください。')
});

type SchemaType= z.infer<typeof RoomIdSchema>

export const RoomModeSelect= () => {
  const [ roomSelected, updateRoomSelected ]= useAtomValueChange(RoomModeValueState);
  const { register, formState: { errors } } = useForm<SchemaType>(
    {
      mode: "onChange",
      shouldUnregister: false,
      resolver: zodResolver(RoomIdSchema),
    }
  );

  return (
    <>    
      <RadioButton 
        id='create_room'
        label=' ルーム作成' 
        value={ROOM_MODES.CREATE_ROOM}
        selected={roomSelected}
        onChange={updateRoomSelected}
      />
      <InputStyle>
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
            <InputFieldStyle>
              <InputField
                id='roomId'
                type='text'
                size='medium'
                error= {errors.roomId}
                placeholder='ルームIDを入力してください。'
                registration= { register('roomId') } 
              />          
            </InputFieldStyle>
          : undefined
        }         
      </InputStyle>
    </>
  )
}