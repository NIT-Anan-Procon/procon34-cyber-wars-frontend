import { useChallengeDataTranslator } from "@/features/challenge";
import styled from "styled-components";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from "@/components/Elements";
import { HintListItemWrapper } from "./HintListItemWrapper";
import { showHintIndex, useShowHintIndex } from "../api";
import { useRecoilValue } from "recoil";
import { hasHintState } from "@/atoms";
import { queryClient } from "@/lib/react-query";

const _HintList= styled.ul`
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const _HintListItem= styled.li`
  height: 5rem;
  width:100%;
  display: flex;
  align-items: center;
  background: white;
`;

export const HintList= () => {
  const { hintObject }= useChallengeDataTranslator();
  const hintMutation= useShowHintIndex();
  const canShowHint= useRecoilValue( hasHintState );
  const data = queryClient.getQueryData(["query_showHintIndex"]);

  return (
    <_HintList>
      { hintObject?.map(( props, index) => (
          <li key={index}>
            <HintListItemWrapper
              icon= {<LockIcon />}
            >
            <LockOpenIcon></LockOpenIcon>
            <LockIcon />
            <div>{`hint ${props.index}`}</div>
            <div></div>
              <Button type='button'
                  onClick={ async() => await hintMutation.mutate( props.index )}
                >{ props.hintScore }pt</Button>
            </HintListItemWrapper>
          </li>
        )) 
      }
    </_HintList>
  );
};