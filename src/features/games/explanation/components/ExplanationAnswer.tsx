import { colors } from "@/assets/styles";
import { Loading } from "@/components/Animation";
import { CHALLENGE_CHOICES_KEY, useFetchChallengeQuery } from "@/features/games/challenge";
import styled from "styled-components";

const _ExplanationAnswerWrapper= styled.div`
  line-height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const _ExplanationAnswerHead= styled.h1`
  height: 4rem;
  width: 10rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ colors.primary };
  clip-path: polygon(0 0, 100% 9%, 97% 100%, 0% 100%);
  color: ${ colors.bgLighter };
`;

const _ExplanationAnswerText= styled.div`
  display: flex;
  justify-content: center;
  padding:10px;
  column-gap: 10px;
  height: 100%;
  width:100% ;
  background: ${ colors.bgDarker };
  border-radius: 5px;
`;

const _AnswerBox= styled.div`
  height: 5rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 10px;
  background: ${ colors.primary };
`;

export const ExplanationAnswer= () => {
  const challengeQuery= useFetchChallengeQuery({});

  if( challengeQuery.isLoading ) {
    return <Loading />
  }
  
  if( !challengeQuery?.data ) return null;

  return (
    <_ExplanationAnswerWrapper>
      <_ExplanationAnswerHead >攻撃例</_ExplanationAnswerHead>
      <_ExplanationAnswerText>
        { challengeQuery?.data[ CHALLENGE_CHOICES_KEY ].map(( value ) => (
            <_AnswerBox>{ value }</_AnswerBox>
          ))
        }
      </_ExplanationAnswerText>
    </_ExplanationAnswerWrapper>
  );
};