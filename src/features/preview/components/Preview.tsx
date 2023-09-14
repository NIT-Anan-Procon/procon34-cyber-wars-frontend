import { codeState } from '@/atoms';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { createAbsolutePath } from '../selector/createAbsolutePath';

const _PreviewBox= styled.div<{ styles?: string }>`
  width      : 100%;
  height     : 100%;
  border     : none;
  outline    : none;
  background : transparent;

  ${(props) => props.styles};
`;

const _Preview= styled.iframe`
  width      : 100%;
  height     : 100%;
`;

type PreviewProps= {
  phaseTitle: string;
  codePath ?: string;
  styles   ?: string;
};

export const Preview= (
  { 
    phaseTitle,
    styles,  
  }: PreviewProps
) => {
  const getCodePath= useRecoilValue( createAbsolutePath(phaseTitle) );

  return (
    <_PreviewBox styles={ styles } >
      <_Preview src= { getCodePath } /> 
    </_PreviewBox>
  );
};