import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _HintLayout= styled.div`
  height: 100%;
  width : 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _HintLayoutTitle= styled.div`
  height         : 6rem;
  width          : 20rem;
  position       : relative;
  display        : flex;
  align-items    : center;
  justify-content: center;

  &::before {
    content   : '';
    width     : 100%;
    height    : 100%;
    position  : absolute;
    background: ${ colors.bgLighter };
    clip-path : polygon(5% 8%, 93% 14%, 95% 88%, 10% 90%);
    z-index   : 2;
  };

  > h1 {
    font-size: 2.5rem;
    color    : ${ colors.bgDarker };
    z-index  : 10;
  }
`;

const _HintLayoutBody= styled.div`
  height: 100%;
  width : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _HintDescription= styled.p`
  font-size: 1.4rem;
  font-weight: bolder;

`;

type HintLayoutProps= {
  description: string;
  body : React.ReactNode;
};

export const HintLayout= ({ description, body }: HintLayoutProps) => {
  return (
    <_HintLayout>
      <_HintLayoutTitle>
        <h1>{'HINT'}</h1>
      </_HintLayoutTitle>
      
      <_HintLayoutBody>
        {/* <_HintDescription>{ description }</_HintDescription> */}
        { body }
      </_HintLayoutBody>
    </_HintLayout>
  );
};