import { colors } from '@/styles';
import styled from 'styled-components';

const _HeaderContainer= styled.div`
  height         : 100%;
  width          : 100%;
  padding-top    : 3.5rem;
  position       : relative;
  display        : flex;
  justify-content: center;
`;

const _HeadTitle= styled.div`
  height     : 5rem;
  width      : 28.5rem;
  position   : relative;
  display    : flex;
  justify-content: center;
  align-items: center;
  background : ${ colors.primary };
  transform  : rotate(-3deg);
  z-index: 10;
  &::before {
    position: absolute;
    content : '';
    inset   : 0;
    left    : -8px;
    height  : 5rem;
    width   : 30rem;
    background : ${ colors.primary };
    transform: rotate(6deg);
  }

  > span {
    font-size  : 4rem;
    color  : white; 
    transform: rotate(3deg);
  }  
`;

const _RoomIdBox= styled.div`
  height      : 10rem;
  width       : clamp(40rem, 15vw, 60rem);
  position    : relative;
  display     : flex;
  justify-content: center;
  font-size   : 2rem;
  font-weight : 600;
  color       : white;
  padding-left: 10px;
  background  : transparent;
`;

const _RoomId= styled.span`
  height : 10rem;
  width  : 25rem;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: end;
  text-align : center;
  background : black;
  position   : absolute;
  bottom     : -10px;
  left       : 50%;
  font-size  : 4rem;
  transform  : translateX(-50%);
`;

export const StandbyHeader= () => {
  return (
    <_HeaderContainer>
      <_RoomIdBox>
        <_HeadTitle>
          <span>ROOMID</span>
        </_HeadTitle>
        <_RoomId>{1234}</_RoomId>
      </_RoomIdBox>
    </_HeaderContainer>
  );
};