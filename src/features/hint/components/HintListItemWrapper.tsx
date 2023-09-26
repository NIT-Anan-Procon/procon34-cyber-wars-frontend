import styled from 'styled-components';
import { colors } from '@/assets/styles';
import { Lock } from '@mui/icons-material';


const _HintListItemWrapper= styled.div`
  width     : clamp( 40rem, 100%, 60rem );
  height    : 5rem;
  display   : flex;
  align-items    : center;
  justify-content: center;
  background: ${ colors.bgLighter };
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