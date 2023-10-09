import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _EditorWrapper= styled.div`
  height: calc( 82vh - 25rem );
  width : 50vw;
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  background     :  transparent; 
  overflow       : auto;
`;

const _EditorHead= styled.div`
  margin-bottom : 10px;
  width      : 100%;
  background : transparent;

  > span {
    display    : block;
    line-height: 4rem;
    width      : 10rem;
    font-size  : 1.75rem;
    color      : ${ colors.bgLighter };
    text-align : center;
    background : ${ colors.blueAccent };
    clip-path: polygon(0 0, 100% 5%, 99% 100%, 2% 100%);
  }
`;

const _EditArea= styled.div`
  height: calc( 100% - 3rem );
  width : 100%;
  overflow: auto;
  background   : black;
  border-radius: 5px;
  font-size    : 1.5rem;
`;

type EditorWrapperProps= {
  children: React.ReactNode;
};

export const EditorWrapper= ({ children }: EditorWrapperProps ) => {
  return (
    <_EditorWrapper >
      <_EditorHead >
        <span>PHP</span>
      </_EditorHead>
      <_EditArea>{ children }</_EditArea>
    </_EditorWrapper>
  );
};