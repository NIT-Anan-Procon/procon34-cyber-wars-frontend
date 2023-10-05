import { Button } from "@/components/Elements";
import { useRecoilState } from "recoil";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { isHintDrawState } from "../states";
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


export const HintDrawerContent= () => {
  const [ isHintOpen, setIsHintOpen ]= useRecoilState( isHintDrawState );
  
  const handleOpen= () => {
    setIsHintOpen((prev) => !prev );
  };

  return (
    <HintLayout
        description= {'ポイントを消費して、ヒントを閲覧することができます。'}
        body= {
        <HintList />
      }
    />
  );
};