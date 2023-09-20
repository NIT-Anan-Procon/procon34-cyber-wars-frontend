// import { useChallengeDataTranslator } from "@/features/challenge";
import styled from "styled-components";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from "@/components/Elements";
import { HintListItemWrapper } from "./HintListItemWrapper";
import { useRecoilValue } from "recoil";
import { hasHintState, vulnerabilitiesState } from "@/atoms";
import { queryClient } from "@/lib/react-query";
import { hintIndexListState } from "@/atoms/game/hintIndexListState";
import { useShowHint } from '../api/useHint';
import { colors } from "@/assets/styles";

const _HintList= styled.ul`
  height: 100%;
  width: 30%;
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

const $HintButton= styled(Button)`
  &:hover {
    background: ${ colors.danger };
  }
`;

export const HintList= () => {
  const vulnerabilities= useRecoilValue( vulnerabilitiesState );
  const showHintIndex= useRecoilValue( hintIndexListState );
  const { showHint }= useShowHint();
  // const { hintObject }= useChallengeDataTranslator();
  // const hintMutation= useShowHintIndex();
  // const canShowHint= useRecoilValue( hasHintState );

  return (
    <_HintList>
      {vulnerabilities.map(( props, index) => (
          <li key={index}>
            <HintListItemWrapper
              icon= {<LockIcon />}
            >
            <div>{`hint ${index}`}</div>
            {
              showHintIndex.includes( index )
              ? <div><LockOpenIcon/>{ props.hint }</div>
              : <$HintButton
                  type='button'
                  onClick={ async() => await showHint(index) }
                ><LockIcon />
                  { props.hintScore }pt
                </$HintButton>
            }
            </HintListItemWrapper>
          </li>
        )) 
      }
    </_HintList>
  );
};