import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { Button } from '@/components/Elements';
import { focusedInputElementState, viewerRefState } from '@/features/webViewer';
import { vulnerabiliesFormatSelector } from "@/features/vulnerabilities/states/selector/vulnerabilitiesFormatSelector";

const $VulnerabilitySubmitButton= styled(Button)`
  height : 5rem;
  width  : 10rem;
`;

export const EnterChoicesButton= () => {
  const previewRef= useRecoilValue( viewerRefState );
  const value= useRecoilValue( vulnerabiliesFormatSelector );
  const focusedInputElement= useRecoilValue( focusedInputElementState );

  
  function handleClick() {
    const input = previewRef?.current.contentDocument.querySelector('input');
    const button = previewRef?.current.contentDocument.querySelector('button');
    focusedInputElement.value =value;

    button.click()
  }
  return (
    <$VulnerabilitySubmitButton onClick={handleClick}>
      Enter
    </$VulnerabilitySubmitButton>
  );
};