import { Button } from "@/components/Elements";
import { useRecoilState } from "recoil";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { isHintDrawState } from "../states";
import { Lock } from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import styled, { css } from "styled-components";
import { colors } from '@/assets/styles/colors';
import { HintContentWrapper } from "./HintContentWrapper";
import { HintPointButton } from ".";

const _HintDrawerContent= styled.div`
  height : 100%;
  width  : 100%;
  padding: 20px;
`;

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
  const [ isShowHint, setIsShowHint ]= useRecoilState( isHintDrawState );
  
  const handleShowHint= () => {
    setIsShowHint((prev: boolean) => !prev );
  };

  return (
    <_HintDrawerContent >
      <HintContentWrapper>
        { isShowHint
          ? <>
              {'ポイントを消費してヒントを閲覧することができます'}
              <HintPointButton />
            </>
          : <></>
        }        
      </HintContentWrapper>
    </_HintDrawerContent>
  );
};