import { useCallback, useEffect, useState } from 'react';
import styled   from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Head } from "@/components/Head";
import { SelectionCard } from "../components";
import { Button, Header, IconButton } from "@/components/Elements";
import { CARD_DESCRIPTION, MATCH_MODE_PATH, SETTINGS_PATH, TRAIN_MODE_PATH } from "..";
import userIcon from '@/assets/images/user.svg';
import { useSignOut } from '@/features/auth';
import { RoomSelectForm } from '@/features/rooms';
import { useModal } from '@/hooks/useModal';


const SelectionGrid= styled.div`
  height : 100%;
  width  : 100%;
  padding: 3rem 20%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows   : 10rem 1fr;
  column-gap: 5rem;
  row-gap   : 5rem;
`;

const HeaderContainer= styled.div`
  position       : relative;
  grid-row       : 1;
  grid-column    : 1 / span 2;
  width          : 100%;
  height         : 100%;
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
height: 100%;
  width: 100%;
  display: flex;
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
  width  : 100vw;
  border: none;
  background: transparent;
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
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;

export const ModeSelection= () => {
  const navigate= useNavigate();
  const [ isNavOpen, setIsNavOpen ]= useState<boolean>(false);
  const { ref, showModal, closeModal }= useModal();
  const { isSignOut }= useSignOut();

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
              <IconButton 
                icon={ userIcon }
                onClick={ handleNavOpen }
              />
              { isNavOpen 
                ? <NavList>
                    <NavItem to={SETTINGS_PATH}>ユーザ設定</NavItem>
                    <NavItem to='..' onClick={()=> isSignOut() } >Sign Out</NavItem>
                  </NavList>
                : undefined
              }                          
            </div>
          </IconButtonWrapper>
        </HeaderContainer>

        <SelectionContainer>
          <TrainSelectionCard 
            id= {'train_mode'}
            title='訓練モード'
            imgPath=''
            description={ CARD_DESCRIPTION.TRAIN_DESCRIPTION}
          >
            <Button onClick={() => navigate(TRAIN_MODE_PATH)} >
              Start Tutorial
            </Button>
          </TrainSelectionCard>
        </SelectionContainer>  

        <SelectionContainer>
          <MatchSelectionCard 
            id={'match_mode'}
            title='対戦モード' 
            imgPath=''
            description={ CARD_DESCRIPTION.MATCH_DESCRIPTION }
          >
            <Button type='button' onClick={ showModal }>
              Start Game
            </Button>
            <DialogLayout onClick={ closeModal } ref={ref}>
              <DialogContent onClick={stopPropagation}>
                <RoomSelectForm />
              </DialogContent>
            </DialogLayout>
          </MatchSelectionCard>            
        </SelectionContainer>   
      </SelectionGrid>    
    </>
  );
};