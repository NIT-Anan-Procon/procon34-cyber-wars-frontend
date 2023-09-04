import styled from "styled-components";
import { PhaseLayout, PhaseTimer, UserBoardsLayout } from "../components";

import { EditArea } from "@/features/codeEdiror";
import { colors } from "@/styles";

const $PhaseTimer= styled(PhaseTimer)`
  grid-column: 1 / span 2;
  grid-row   : 1;
  width      : 100vw;
  height     : 10vh;
`;

const $MyUserScoreBoard= styled.div`
  height: 20rem;
  width : 40rem;
  background: white;
`;

const $OpponentScoreBoard= styled.div`
  height: 20rem;
  width : 40rem;
  background: white;
`;

const _Preview= styled.iframe`
  grid-column: 1;
  grid-row   : 3;
  width      : 100%;
  height     : 100%;
  border     : none;
  outline    : none;
  background : white;
`;

const _EditorWrapper= styled.div`
  grid-column: 2;
  grid-row   : 3;
  height: calc(100% - 10px);
  width : 100%;
  background: ${ colors.bgDarker };
  font-size: 1.5rem;
  overflow: auto;
`;

export const DefencePhase= () => {
  return (
    <PhaseLayout title='ディフェンスフェーズ'>
      <$PhaseTimer phaseTitle={'defence'}/>
      <UserBoardsLayout>
        <$MyUserScoreBoard />
        <$OpponentScoreBoard />
      </UserBoardsLayout>
      <_EditorWrapper >
        <EditArea />
      </_EditorWrapper>
      <_Preview src={'@/mocks/challengeData/mock_challenge.php'} />
    </PhaseLayout>
  );
};