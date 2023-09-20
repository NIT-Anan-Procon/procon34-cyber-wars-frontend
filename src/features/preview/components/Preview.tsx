import { previewRefState } from '@/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { createAbsolutePath } from '../selector/createAbsolutePath';
import { useRef, useEffect } from 'react';

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
  phase  : string;
  styles?: string;
};

export const Preview= (
  { 
    phase,
    styles,  
  }: PreviewProps
) => {
  const getCodePath= useRecoilValue( createAbsolutePath(phase) );
  const iframeRef= useRef(null);
  const [ previewRefValue, setPreviewRefValue ]= useRecoilState( previewRefState );

  useEffect(() => {
    setPreviewRefValue(iframeRef);
  }, []);

  return (
    <_PreviewBox styles={ styles } >
      <_Preview
        ref= { iframeRef } 
        src= { getCodePath } 
      /> 
    </_PreviewBox>
  );
};