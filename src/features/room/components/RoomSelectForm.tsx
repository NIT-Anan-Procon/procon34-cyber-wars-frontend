import styled from "styled-components";

import { Form, FormTitle, InputField } from "@/components/Form"
import { RoomIdSchema } from "../types";
import { Button, RadioButton } from "@/components/Elements";
import { useAtomValueChange } from "@/hooks/useAtomValueChange";
import { ROOM_MODES } from "../types";
import { CreateRoomResponseType, JoinRoomRequestType, JoinRoomResponseType, useCreateRoomMutation, useJoinRoomMutation } from "../api";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { roomModeState } from "../states";

const InputStyle= styled.div`
  position: relative;
`;

const InputFieldStyle= styled.div`
  position: absolute;
  width   : 30rem;
  bottom  : -45px;
`;

type RoomSelectFormProps = {
	onSuccess: () => void;
};

export const RoomSelectForm = ({ onSuccess }: RoomSelectFormProps) => {
  const [ roomSelected, updateRoomSelected ]= useAtomValueChange(roomModeState);
  const createRoomMutation= useCreateRoomMutation();
  const joinRoomMutation  = useJoinRoomMutation({});

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
              <Form<JoinRoomRequestType, typeof RoomIdSchema>
                onSubmit={ async( roomId: JoinRoomRequestType ) => {
                  await joinRoomMutation.mutateAsync(roomId);
                  onSuccess()
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
                  await createRoomMutation.mutateAsync(false),
                  onSuccess()
                )} 
              > 
                START
              </Button>
          }         
        </InputStyle>
    </>
  );
};