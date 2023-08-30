import { colors } from '@/styles';
import styled from 'styled-components';

const _RoomIdBox= styled.div`
  height      : 10rem;
  width       : clamp(40rem, 15vw, 60rem);
  position    : relative;
  font-size   : 2rem;
  font-weight : 600;
  color       : white;
  padding-left: 10px;
  background  : ${ colors.primary };
  > span {
    display   : inline-block;
    position  : absolute;
    top       : 0%;
    left      : 50%;
    font-size : 4rem;
    transform : translate(-50%, -50%);
    background: ${ colors.bgDarker }
  }
`;

const _RoomId= styled.p`
  width     : 30rem;
  display   : inline-block;
  text-align: center;
  background: black;
  position  : absolute;
  top       : 65%;
  left      : 50%;
  font-size : 4rem;
  transform : translate(-50%, -50%);
`;

type RoomIdCardProps= {
  roomId: number;
};

export const RoomIdBox= ({ roomId }: RoomIdCardProps) => {
  return (
    <_RoomIdBox>
      <span>ROOMID</span>
      <_RoomId>{roomId}</_RoomId>
    </_RoomIdBox>
  )
}