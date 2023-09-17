import { colors } from "@/assets/styles";
import { hintState } from "@/atoms";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const _HintBox= styled.div`
  height: 100%;
  width : 50%;
  background: ${ colors.bgDarker };
  border-radius: 5px;
`;

const _HintBoxWrapper= styled.div`
  height: calc(100% - 10px);
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const _HintDescription= styled.p`
  font-size: 1.5rem;
  word-wrap: break-word;

`;

export const DisplayHintBox= () => {
  const displayHint= useRecoilValue( hintState );

  return (
    <_HintBox>
      <_HintBoxWrapper >
        <_HintDescription>{ displayHint }</_HintDescription>
      </_HintBoxWrapper>
    </_HintBox>
  );
};