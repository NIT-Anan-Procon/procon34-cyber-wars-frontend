import styled from 'styled-components';
import { colors } from '@/assets/styles';
import { Lock } from '@mui/icons-material';


const _HintListItemWrapper= styled.div`
  width     : 100%;
  height    : 100%;
  display   : flex;
  flex-direction: column;
  align-items    : center;
  justify-content: center;
  background: ${ colors.bgLighter };
  overflow  : auto;
`;

type HintListItemWrapperProps= {
  children: React.ReactNode;
};

export const HintListItemWrapper= (
  {
    children
  }: HintListItemWrapperProps
) => {
  return (
    <_HintListItemWrapper>
      <Lock />
      { children }
    </_HintListItemWrapper>
  );
};