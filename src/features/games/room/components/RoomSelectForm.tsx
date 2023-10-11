import styled from "styled-components";

import { Form, InputField } from "@/components/Form"
import { RoomIdSchema } from "../types";
import { Button, RadioButton } from "@/components/Elements";
import { useAtomValueChange } from "@/hooks/useAtomValueChange";
import { ROOM_MODES } from "../types";
import { JoinRoomRequestType, useCreateRoomMutation, useJoinRoomMutation } from "../api";
import { inviteIdState, roomModeState } from "../states/atoms";
import { colors } from "@/assets/styles";
import { useSetRecoilState } from "recoil";

const _RoomSelectForm= styled.div`
  height : 100%;
  width  : 100%;
  padding: 4rem 10%;
  position: relative;
  background: ${ colors.bgDarker };
  display   : flex;
  flex-direction: column;
`;

const _RoomSelectFormTitle= styled.div`
  height: 8rem;
  width : 100%;
  text-align: center;
  > h1 {
    font-size: 4rem;
    color    : ${  colors.bgLighter };
  };
`;

const _RoomSelectFormContents= styled.div`
  height: 100%;
  width : 100%;
  display: flex;
  margin-top: 20%;
`;

const InputStyle= styled.div`
  height: 100%;
  width : 100%;
  position: relative;
`;

const $StartButton= styled(Button)`
  height  : 5rem;
  width   : 20rem;
  position: fixed;
  right   : 10px;
  bottom  : 10px;
  border-radius: 0;
  font-size: 2rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
`;

const RoomIdFormStyle= `
  height: 5rem;
  width : 100%;
  background: transparent;
  position:relative;
`;

const InputRoomIdStyle= `
  position : absolute;
  top      : 0%;
  right    : 10px;
  height   : 5rem;
  width    : 30rem;
`;

type RoomSelectFormProps = {
	onSuccess: () => void;
};

export const RoomSelectForm = ({ onSuccess }: RoomSelectFormProps) => {
  const [ roomSelected, updateRoomSelected ]= useAtomValueChange(roomModeState);
  const createRoomMutation= useCreateRoomMutation();
  const joinRoomMutation  = useJoinRoomMutation();

  const setInviteId= useSetRecoilState( inviteIdState );

  return (    
    <_RoomSelectForm>
      <_RoomSelectFormTitle>
        <h1>{ 'ルーム選択' }</h1>
      </_RoomSelectFormTitle>
      <_RoomSelectFormContents >
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
                onSubmit={ async({ inviteId }: JoinRoomRequestType ) => {
                  await joinRoomMutation.mutateAsync( inviteId )
                  setInviteId( inviteId )
                  onSuccess()
                }}
                schema={RoomIdSchema}
                styles={RoomIdFormStyle}
              >
                {({ register, formState: { errors }}) => (
                  <>
                    <InputField
                      id='inviteId'
                      type='text'
                      size='medium'
                      error= { errors.inviteId }
                      placeholder='ルームIDを入力してください。'
                      registration= { register('inviteId') }
                      styles={ InputRoomIdStyle } 
                    />          
                    <$StartButton type='submit'>START</$StartButton>
                  </>
                )}
              </Form>
            : <$StartButton 
                type='button'
                onClick={ async() => (
                  await createRoomMutation.mutateAsync(),
                  onSuccess()
                )} 
              > 
                START
              </$StartButton>
          }         
        </InputStyle>        
      </_RoomSelectFormContents>
    </_RoomSelectForm>
  );
};