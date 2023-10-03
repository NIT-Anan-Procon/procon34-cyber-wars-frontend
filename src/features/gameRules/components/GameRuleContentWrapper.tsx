import styled from 'styled-components';
import { colors } from '@/assets/styles';

const _GameRuleContentWrapper= styled.div`
  line-height   : 5rem;
  width         : 100%;  
  display       : flex;
  flex-direction: column;
  row-gap       : 10px;
  z-index       : 10;
`;

const _RuleTitle= styled.div`
  width          : 100%;
  padding-left   : 20px;
  position       : relative;
  display        : flex;
  align-items    : center;
  border-bottom : 3px solid white;

  > h1 {
    position: relative;
    font-size: 2rem;
    font-weight: 600;
    color     : ${ colors.bgLighter };
    z-index   : 100;
    
    &::before{
      content   : '';
      position  : absolute;
      left      : -20px;
      width     : calc( 100% + 40px );
      height    : 100%;
      background: #4d4d4d;
      clip-path : polygon(15% 5%, 98% 18%, 97% 100%, 0 100%);
      z-index   : -1;
    }
  }
`; 

const _RuleContent= styled.div`
  height: 100%;
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    font-size  : 2rem;
    font-weight: 600;
    color      : ${ colors.bgLighter };
    font-family: Arial, Helvetica, sans-serif;
    word-spacing: 5px;
    z-index     : 10;
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