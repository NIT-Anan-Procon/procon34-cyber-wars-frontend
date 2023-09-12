import styled from "styled-components";

import { Form, FormTitle, InputField } from "@/components/Form"
import { RoomFormType } from "../types/formType";
import { RoomIdSchema } from "..";
import { Button, RadioButton } from "@/components/Elements";
import { RoomIdState, RoomModeValueState } from "@/atoms";
import { useAtomValueChange } from "@/hooks/useAtomValueChange";
import { ROOM_MODES } from "../types/roomModes";
import { createRoom, joinRoom } from "../api";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

const InputStyle= styled.div`
  position: relative;
`;

const InputFieldStyle= styled.div`
  position: absolute;
  width   : 30rem;
  bottom  : -45px;
`;

export const RoomSelectForm = () => {
  const [ roomSelected, updateRoomSelected ]= useAtomValueChange(RoomModeValueState);
  const roomId= useRecoilValue<number>(RoomIdState);
  const navigate= useNavigate();

  return (    
    <>
      <FormTitle title={ 'ルーム選択' } />
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
              <Form<RoomFormType, typeof RoomIdSchema>
                onSubmit={ async({roomId} : RoomFormType) => {
                  await joinRoom(roomId);
                }}
                schema={RoomIdSchema}
              >
                {({ register, formState: { errors }}) => (
                  <InputFieldStyle>
                    <InputField
                      id='roomId'
                      type='text'
                      size='medium'
                      error= {errors.roomId}
                      placeholder='ルームIDを入力してください。'
                      registration= {register('roomId')} 
                    />          
                    <Button type='submit'>START</Button>
                  </InputFieldStyle>
                )}
              </Form>
            : <Button 
                type='button' 
                onClick={ async() => (
                  await createRoom(false),
                  navigate('games/standby')
                )} 
              > 
                START
              </Button>
          }         
        </InputStyle>
    </>
  );
};