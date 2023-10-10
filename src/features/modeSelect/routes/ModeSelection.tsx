import { useCallback, useState } from 'react';
import styled   from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Head } from "@/components/Head";
import { SelectionCard } from "../components";
import { Button, Header, IconButton } from "@/components/Elements";
import { CARD_DESCRIPTION, SETTINGS_PATH, TRAIN_MODE_PATH } from "..";
import userIcon from '@/assets/images/user.svg';
import { useModal } from '@/hooks/useModal';
import { RoomSelectForm, useExitRoomMutation } from '@/features/games/room';
import { colors } from '@/assets/styles';
import trainigIcon from '@/assets/images/trainingIcon.svg';
import vsIcon from '@/assets/images/vsIcon.svg';
import { Person } from '@mui/icons-material';

const SelectionGrid= styled.div`
  height : 100%;
  width  : 100%;
  padding: 3rem 20%;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer= styled.div`
  position       : relative;
  width          : 100%;
  height         : 18vh;
  display        : flex;
  justify-content: center;
  align-items    : center;
`;

const IconButtonWrapper= styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;

const NavList= styled.ul`
  position: absolute;
  transform: translateX(-50%);
  width: 12rem;
  height: 100%;
  background: #f3f3f3;
  border-radius: 15px;
  list-style: none;
  padding: 10px;
`;

const NavItem= styled(Link)`
  text-decoration: none; 
  color: grey;
  font-size: 1.2rem;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectionContainer= styled.div`
  height : 82vh;
  width  : 100%;
  display: flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
`;

const TrainSelectionCard= styled(SelectionCard)`
  grid-column: 1;
  grid-row   : 1;
`;

const MatchSelectionCard= styled(SelectionCard)`
  grid-column: 1;
  grid-row   : 2;
`;

const DialogLayout=styled.dialog`
  padding: 0;
  height : 100vh;
  width  : 40rem;
  border: none;
  color: #000;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::backdrop {
    background-color: #000;
    opacity: 0.3;
  }
`;

const DialogContent= styled.div`
  height: 40rem;
  width : 40rem;
  background: ${ colors.bgDarker };
`;

const $IconButton= styled(Button)`
  height: 60px;
  width: 60px;
`;

const $StartButton= styled(Button)<{ mode?: string }>`
  height  : 8rem;
  width   : 25rem;
  position: absolute;
  right   : 10%;
  bottom  : -20px;
  border-radius: 0;
  font-size: 2.75rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
  color: white;
  background:
      ${(props) => props.mode==='train'
        ? `${colors.primary}`
        : `${colors.danger}`
      };
  &:hover{
    transform: scale(1.2);
    background:
      ${(props) => props.mode==='train'
        ? `${colors.primary}`
        : `${colors.danger}`
      };
  }
`;

export const ModeSelection= () => {
  const navigate= useNavigate();
  const [ isNavOpen, setIsNavOpen ]= useState<boolean>(false);
  const { ref, showModal, closeModal }= useModal();
  const exitRoomMutation= useExitRoomMutation();

  const stopPropagation = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    []
  );
  const handleNavOpen= () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <Head title='モード選択画面' />
      <SelectionGrid>
        <HeaderContainer>
          <Header title='モード選択'/>
          <IconButtonWrapper>
            <div style={{position: 'relative'}}>
              <$IconButton 
                onClick={ handleNavOpen }
              > <Person style={{ fontSize: '1.8rem' }} /></$IconButton>
              { isNavOpen 
                ? <NavList>
                    <NavItem to={ SETTINGS_PATH }>ユーザ設定</NavItem>
                    <NavItem 
                      to='..' 
                      onClick={ async()=> await exitRoomMutation.mutateAsync() } >Sign Out</NavItem>
                  </NavList>
                : undefined
              }                          
            </div>
          </IconButtonWrapper>
        </HeaderContainer>

        <SelectionContainer>
          <TrainSelectionCard 
            id= {'train'}
            title='訓練モード'
            imgPath={ trainigIcon }
            description={ CARD_DESCRIPTION.TRAIN_DESCRIPTION}
          >
            <$StartButton
              mode={'train'}
              onClick={() => navigate(TRAIN_MODE_PATH)}
            >
              Start Tutorial
            </$StartButton>
          </TrainSelectionCard>
        </SelectionContainer>  

        <SelectionContainer>
          <MatchSelectionCard 
            id={'match'}
            title='対戦モード' 
            imgPath={ vsIcon }
            description={ CARD_DESCRIPTION.MATCH_DESCRIPTION }
          >
            <$StartButton 
              type='button' 
              mode={ 'match' }
              onClick={ showModal }
            >
              Start Game
            </$StartButton>
            <DialogLayout onClick={ closeModal } ref={ref}>
              <DialogContent onClick={stopPropagation}>
                <RoomSelectForm onSuccess={() => navigate('games/standby')} />
              </DialogContent>
            </DialogLayout>
          </MatchSelectionCard>            
        </SelectionContainer>   
      </SelectionGrid>    
    </>
  );
};