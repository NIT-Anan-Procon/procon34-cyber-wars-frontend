// import { useChallengeDataTranslator, useChallengeTranslator } from '@/features/challenge';
import styled from "styled-components";
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import LockIcon from '@mui/icons-material/Lock';
// import { Button } from "@/components/Elements";
// import { HintListItemWrapper } from "./HintListItemWrapper";
// import { useRecoilValue } from "recoil";
// import { hasHintState, vulnerabilitiesState } from "@/atoms";
// import { queryClient } from "@/lib/react-query";
// import { hintIndexListState } from "@/atoms/game/hintIndexListState";
// import { useShowHint } from '../api/useHint';
import { colors } from "@/assets/styles";
import { useChallengeDataTranslator } from "@/features/vulnerabilities/hooks/challengeDataTranslator";
import { Lock } from "@mui/icons-material";
import { LockOpen } from "@mui/icons-material";
import { HintListItemWrapper } from "./HintListItemWrapper";
import { useChallengeTranslator } from "@/features/challenge";
import { Button } from "@/components/Elements";

const _HintList= styled.ul`
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;


const $HintButton= styled(Button)`
  &:hover {
    background: ${ colors.danger };
  }
`;

export const HintList= () => {
  // const vulnerabilities= useRecoilValue( vulnerabilitiesState );
  // const showHintIndex= useRecoilValue( hintIndexListState );
  // const { showHint }= useShowHint();
  const { vulnerabilities, hintObject }= useChallengeTranslator();
  // const hintMutation= useShowHintIndex();
  // const canShowHint= useRecoilValue( hasHintState );

  return (
    <_HintList>
      { vulnerabilities.map(( props, index) => (
          <_HintListItem key={index}>
            <HintListItemWrapper
              icon= {<Lock />}
            >
            <div>{`hint ${index}`}</div>
            {
              showHintIndex.includes( index )
              ? <div><LockOpen />{ props.hint }</div>
              : <$HintButton
                  type='button'
                  onClick={ async() => await showHint(index) }
                ><Lock />
                  { props.hintScore }pt
                </$HintButton>
            }
            </HintListItemWrapper>
          </_HintListItem>
        )) 
      }
    </_HintList>
  );
};