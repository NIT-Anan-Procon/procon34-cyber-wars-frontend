import { useState } from 'react';
import styled   from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Head } from "@/components/Head";
import { SelectionCard } from "../components";
import { Header } from "@/components/Elements";
import { CARD_DESCRIPTION, MATCH_MODE_PATH, SETTINGS_PATH, TRAIN_MODE_PATH } from "..";
import userIcon from '@/assets/user.svg';
import { useSignOut } from '@/features/auth';


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

const IconButton= styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
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

export const ModeSelection= () => {
  const [ isNavOpen, setIsNavOpen ]= useState<boolean>(false);
  const { signOut }= useSignOut();

  const handleNavOpen= () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleNavClose= () => {
    setIsNavOpen(false);
  }

  return (
    <>
      <Head title='モード選択画面' />
      <SelectionGrid>
        <HeaderContainer>
          <Header title='モード選択'/>
          <IconButtonWrapper>
            <div style={{position: 'relative'}}>
              <IconButton onClick={handleNavOpen}>
                <img src={userIcon} />
              </IconButton>
              { isNavOpen 
                ? <NavList>
                    <NavItem to={SETTINGS_PATH}>ユーザ設定</NavItem>
                    <NavItem to='..' onClick={()=> signOut()} >Sign Out</NavItem>
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
            buttonTitle='START TUTORIAL'
            navRoute= { TRAIN_MODE_PATH}
          />
        </SelectionContainer>  

        <SelectionContainer>
          <MatchSelectionCard 
            id={'match_mode'}
            title='対戦モード' 
            imgPath=''
            description={ CARD_DESCRIPTION.MATCH_DESCRIPTION }
            buttonTitle='START GAME'
            navRoute= { MATCH_MODE_PATH}
          />            
        </SelectionContainer>   
      </SelectionGrid>    
    </>
  );
};