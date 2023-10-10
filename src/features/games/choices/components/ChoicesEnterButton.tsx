import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { Button } from '@/components/Elements';
import { focusedInputElementState } from '@/features/games/webViewer';
import { checkedChoiceValuesSelector } from '../states/selector';

const $VulnerabilitySubmitButton= styled(Button)`
  height : 5rem;
  width  : 15rem;
`;

export const ChoicesEnterButton= () => {
  const value= useRecoilValue( checkedChoiceValuesSelector );
  const focusedInputElement= useRecoilValue( focusedInputElementState );

  
  function handleClick() {
    if(!focusedInputElement) return undefined;
    focusedInputElement.value =value;
  }
  return (
    <$VulnerabilitySubmitButton onClick={handleClick}>
      Enter
    </$VulnerabilitySubmitButton>
  );
};