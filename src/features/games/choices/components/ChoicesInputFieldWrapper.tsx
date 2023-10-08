import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { InputField } from '@/components/Form';
import { targetInputNameState } from '@/features/webViewer';
import { colors } from '@/assets/styles';

const _ChoicesInputFieldWrapper= styled.div`
  height: 100%;
  width : 75%;
  padding-left: 12px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const _TargetName= styled.div`
  font-size: 1.6rem;
  color : ${ colors.primary };
`;

const _InputArea= styled.div`
`;

export const ChoicesInputFieldWrapper= () => {
  const targetInputName= useRecoilValue( targetInputNameState );

  return (
    <_ChoicesInputFieldWrapper>
      <_TargetName>
        {
          ! targetInputName
          ? 'ターゲットを指定してください'
          : <span>Target: { targetInputName }</span>
        }</_TargetName>
      <_InputArea ><InputField id={'choices'} /></_InputArea>
    </_ChoicesInputFieldWrapper>
  );
};