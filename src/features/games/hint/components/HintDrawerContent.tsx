import { useRecoilValue } from "recoil";
import { isShowHintState } from "../states/atom";
import styled from "styled-components";
import { HintContentWrapper } from "./HintContentWrapper";
import { HintPointButton } from ".";
import { HintText } from "./HintText";

const _HintDrawerContent= styled.div`
  height : 100%;
  width  : 100%;
  padding: 20px;
`;

export const HintDrawerContent= () => {
  const isShowHint= useRecoilValue( isShowHintState );

  return (
    <_HintDrawerContent >
      <HintContentWrapper>
        { !isShowHint
          ? <>
              {'ポイントを消費してヒントを閲覧することができます'}
              <HintPointButton />
            </>
          : <HintText />
        }        
      </HintContentWrapper>
    </_HintDrawerContent>
  );
};