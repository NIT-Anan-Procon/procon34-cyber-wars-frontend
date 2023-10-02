import styled     from 'styled-components';
import { colors } from '@/assets/styles';
import { HintButtonList, HintLayout } from '@/features/hint';

const _PhaseContentsLayout= styled.div`
  height        : 82vh;
  width         : 100%;
  padding       : 10px 20px;
  display       : flex;
  flex-direction: column;
  row-gap       : 2rem;
  background    : ${ colors.bgDarker };
  font-size     : 1.5rem;
`;

const _PhaseContentHead= styled.div`
  height     : 6.5rem;
  width      : 100%;
  position   : relative;
  display    : flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content : '';
    position: absolute;
    width   : 100rem;
    height  : 100%;
  };

  &::before {
    background: black;
    clip-path : polygon(0 0, 100% 3%, 99% 100%, 1% 97%);
    z-index   : 2;
  };
`;

const _HeadDescription= styled.h1`
  position   : relative;
  font-size  : 2.1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color      : ${ colors.bgLighter };
  z-index    : 100;

  &::before {
    content   : '';
    position  : absolute;
    bottom    : -3px;
    height    : 2rem;
    width     : 100%;
    background: ${ colors.primary };
    clip-path : polygon(0 71%, 100% 6%, 98% 100%, 2% 100%);
    z-index   : -1;
  };
`;

const _PhaseContentBody= styled.div`
  height       : calc( 100% - 20rem );
  width        : 100%;
  position     : relative;
  display      : flex;
  column-gap   : 10px;
  background   : ${ colors.bgDarker };
  border-radius: 5px;
`;

const _PhaseContentFoot= styled.div`
  height     : 8rem;
  width      : 100%;
  position   : relative;
  bottom     : 0;
  display    : flex;
  align-items: center;
  background : ${ colors.bgDarker };
`;

type PhaseContentsLayoutProps= {
  header?: string;
  body  : React.ReactNode;
  foot  : React.ReactNode;
};

export const PhaseContentsWrapper= (
  { 
    header,
    body,
    foot
  }: PhaseContentsLayoutProps
) => {
  return (
    <_PhaseContentsLayout>
      <_PhaseContentHead>
        <_HeadDescription>{ 'SQLインジェクションを使って、ログイン情報を抜き出そう!!'}</_HeadDescription>
      </_PhaseContentHead>
      
      <_PhaseContentBody >
        { body }
        {/* <HintLayout >
          <HintButtonList />
        </HintLayout>           */}
      </_PhaseContentBody>
      <_PhaseContentFoot>{ foot }</_PhaseContentFoot>
    </_PhaseContentsLayout>
  );
};  