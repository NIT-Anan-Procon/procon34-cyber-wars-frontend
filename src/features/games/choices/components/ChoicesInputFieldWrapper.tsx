import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { InputField } from '@/components/Form';
import { targetInputNameState } from '@/features/games/webViewer';
import { colors } from '@/assets/styles';
import { checkedChoiceValuesSelector } from '../states/selector';
import { ChoicesEnterButton } from '.';

const _ChoicesInputFieldWrapper= styled.div`
  height: 100%;
  width : 100%;
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  row-gap: 10px;
  border-radius: 5px;
`;

const _TargetName= styled.div<{ isTarget: string }>`
  font-size: 2rem;
  color: 
    ${(props) => !props.isTarget
      ? `${ colors.danger }`
      : `${ colors.primary }`
    };
`;

const _InputArea= styled.div`
  display: flex;
  column-gap: 20px;
`;

export const ChoicesInputFieldWrapper= () => {
  const targetInputName= useRecoilValue( targetInputNameState );
  const checkedChoiceValues= useRecoilValue( checkedChoiceValuesSelector );

  return (
    <_ChoicesInputFieldWrapper>
      <_TargetName isTarget={ targetInputName } >
        {
          ! targetInputName
          ? <span>ターゲットを指定してください</span>
          : <span>Target: { targetInputName }</span>
        }
      </_TargetName>
      <_InputArea >
        <InputField id={'choices'} value={ checkedChoiceValues } />
        <ChoicesEnterButton />
      </_InputArea>
    </_ChoicesInputFieldWrapper>
  );
};