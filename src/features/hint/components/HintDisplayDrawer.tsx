import { Button } from "@/components/Elements";
import { useRecoilState } from "recoil";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { isHintDrawerState } from "../states";
import { Lock } from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import styled, { css } from "styled-components";
import { colors } from '@/assets/styles/colors';
import { HintLayout, HintList } from ".";

const $HintButton= styled(Button)`
  height  : 6rem;
  width   : 6rem;
  position: absolute;
  right   : 0px;
  bottom  : 8rem;
  z-index : 999;
  border-radius: 50%;
  background: ${ colors.primary };
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
`;

type HintDisplayDrawerProps= {
  children?: React.ReactNode;
};

export const HintDisplayDrawer= ({ children }: HintDisplayDrawerProps ) => {
  const [ isHintOpen, setIsHintOpen ]= useRecoilState( isHintDrawerState );
  
  const handleOpen= () => {
    setIsHintOpen((prev) => !prev );
  };

  return (
    <>
      <$HintButton onClick={ handleOpen }><PriorityHighIcon style={{fontSize: '2.5rem'}}/></$HintButton>
      { isHintOpen
        ? <HintLayout
            title= {'ポイントを消費して、ヒントを閲覧'}
            body= {
              <HintList />
            }
          />
        : undefined
      }   
    </>
  );
};