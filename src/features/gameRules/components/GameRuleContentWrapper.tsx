import styled from 'styled-components';
import { colors } from '@/assets/styles';

const _GameRuleContentWrapper= styled.div`
  line-height  : 5rem;
  width        : 100%;  
  display      : flex;
  border-bottom: 3px solid white;
`;

const _RuleTitle= styled.div` 
  width          : 20rem;
  position       : relative;
  display        : flex;
  align-items    : center;
  justify-content: center;

  &::before,
  &::after {
    content   : '';
    position  : absolute;
    width     : 100%;
    height    : 100%;
  }

  &::before {
    background: black;
    clip-path : polygon(15% 5%, 98% 18%, 97% 100%, 0 100%);
    z-index   : 2;
  }

  > h1 {
    font-size: 2rem;
    font-weight: 600;
    color     : ${ colors.bgLighter };
    z-index   : 100;
  }
`; 

const _RuleContent= styled.div`
  line-height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;

  > p {
    font-size  : 3rem;
    font-weight: 600;
    color      : ${ colors.bgLighter };
    font-family: Arial, Helvetica, sans-serif;
    word-spacing: 5px;
  }
`;

type GameRuleContentWrapperProps= {
  ruleTitle   : string;
  ruleContent?: string;
};

export const GameRuleContentWrapper= (
  {
    ruleTitle,
    ruleContent
  }: GameRuleContentWrapperProps
) => {
  return (
    <_GameRuleContentWrapper>
      <_RuleTitle>
        <h1>{ ruleTitle }</h1>
      </_RuleTitle>
      <_RuleContent>
        <p>{ ruleContent }</p>
      </_RuleContent>
    </_GameRuleContentWrapper>
  );
};