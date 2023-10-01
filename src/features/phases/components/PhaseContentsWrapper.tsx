import styled     from 'styled-components';
import { colors } from '@/assets/styles';
import { HintButtonList } from '@/features/hint';

const _PhaseContentsLayout= styled.div`
  height        : 82vh;
  width         : 100%;
  padding       : 20px;
  display       : flex;
  flex-direction: column;
  row-gap       : 2rem;
  background    : ${ colors.bgDarker };
  font-size     : 1.5rem;
`;

const _PhaseContentHead= styled.div`
  height     : 4.5rem;
  width      : 100%;
  position   : relative;
  display    : flex;
  align-items: center;
  justify-content: center;
  background : ${ colors.bgDarker };
`;

const _HeadDescription= styled.h3`
  font-size: 1.5rem;
  color: #e4e4e4;
`;

const _PhaseContentBody= styled.div`
  height       : calc( 100% - 15rem );
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
      
        <HintButtonList />
  
      </_PhaseContentBody>

      <_PhaseContentFoot>{ foot }</_PhaseContentFoot>
    </_PhaseContentsLayout>
  );
};  