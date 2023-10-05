// import { useChallengeDataTranslator } from "@/features/challenge";
import styled from "styled-components";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from "@/components/Elements";
import { HintListItemWrapper } from "./HintListItemWrapper";
import { useRecoilValue } from "recoil";
import { hasHintState, vulnerabilitiesState } from "@/atoms";
import { queryClient } from "@/lib/react-query";
import { colors } from "@/assets/styles";
import { useShowHintMutation } from "..";
import { hintIndexListState } from "../states";
import { VULNERABILITIES_KEY, useFetchChallengeQuery } from "@/features/challenge";
import { Loading } from "@/components/Animation";

const _HintList= styled.ul`
  height: auto;
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
`;

const _HintListItem= styled.li`
  height : 6rem;
  width  : 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background: #ffffff; */
  
  > h1 {
    width: 50%;
    font-size: 2.5rem;
  }
`;

const _HintDisplayBox= styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
`;

const $HintButton= styled(Button)`
  width: 100%;
  background: ${ colors.danger };
`;

export const HintList= () => {
  const showHintIndex= useRecoilValue( hintIndexListState );
  const showHintMutation= useShowHintMutation();
  const { data: vulnerabilities, isLoading }= useFetchChallengeQuery({
    config: {
      select: ( data )=> data[ VULNERABILITIES_KEY ]
    }
  });


  if( isLoading ) {
    return <Loading />
  };

  if( !vulnerabilities ) return null;

  return (
    <_HintList>
      
          <_HintListItem>
            {
              !showHintIndex.includes( 0 )
              ? <_HintDisplayBox>
                  <p>{ vulnerabilities[0].hint }</p>
                </_HintDisplayBox>
              : <$HintButton
                  startIcon={<LockIcon style={{ fontSize: '2rem' }} />}
                  type='button'
                  onClick={ async() => await showHintMutation.mutateAsync(0) }
                >
                  { vulnerabilities[0].hintScore }pt
                </$HintButton>
            }
          </_HintListItem>

    </_HintList>
  );
};