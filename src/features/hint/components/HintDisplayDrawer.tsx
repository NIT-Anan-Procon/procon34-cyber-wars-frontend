import { Button } from "@/components/Elements";
import { useRecoilState } from "recoil";
import { isHintDrawerState } from "../states";
import { Lock } from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import styled, { css } from "styled-components";
import { colors } from '@/assets/styles/colors';

const $HintButton= styled(Button)<{ isOpen: boolean }>`
  ${(props) => props.isOpen
    ? css`
        background: ${ colors.primary };
        transform : rotate( 45deg );
        > svg {
          transform: rotate(-45deg);
        };
      `
    : css`
        
        background: ${ colors.danger };
      `
  };

  &:hover {
    background: transparent;
    opacity: 0.7;
  };
`;

type HintDisplayDrawerProps= {
  id  : number;
  hint: string;
  hintScore: number;
};

export const HintDisplayDrawer= (
  {
    id,
    hint,
    hintScore
  }: HintDisplayDrawerProps
) => {
  const [ isHintOpen, setIsHintOpen ]= useRecoilState( isHintDrawerState(id));
  
  const handleOpen= () => {
    setIsHintOpen((prev) => !prev );
  };

  return (/
    <$HintButton onClick={ handleOpen } isOpen={ isHintOpen } >
      { !isHintOpen
        ? <Lock style={{ fontSize: '2rem' }} />
        : <LockOpenIcon style={{ fontSize: '2rem', transform: `rotate(-45deg)` }} />
      }
    </$HintButton>
  );
};