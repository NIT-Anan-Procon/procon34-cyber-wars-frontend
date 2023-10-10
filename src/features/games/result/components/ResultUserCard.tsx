import styled, { css }     from 'styled-components';

import { colors } from '@/assets/styles';
import { IS_HOST_KEY, useFetchRoomInfoQuery } from '../../room';
import { SCORES_KEY, useFetchScoresQuery } from '../../scores';

const _ResultUserCard= styled.div<{status: 'HOST' | 'GUEST'}>`
  height    : 20rem;
  width     : 60rem;
  font-size : 3rem;
  position  : relative;
  background: transparent;
`;

const _UserNameWrapper= styled.div<{status: 'HOST' | 'GUEST'}>`
  margin    : 0 20px;
  height    : 10rem;
  width     : 30rem;
  position  : absolute;
  top:-60px;
  left: -30px;
  display   : flex;
  align-items: center;
  justify-content: center;
  transform: skew( 3deg );
  ${(props) => props.status === 'HOST'
      ? css`
          background: #2F1FF6;
          clip-path: polygon(0 0, 100% 16%, 97% 100%, 4% 100%);
        `
      : css`
          background: ${ colors.redAccent };
          clip-path: polygon(0 0, 100% 16%, 97% 100%, 4% 100%);
      `
  };
  z-index   : 100;
`;

const _UserName= styled.h1<{status: 'HOST' | 'GUEST'}>`
  font-size: 4.8rem;
  z-index  : 999;
  color: ${ colors.bgLighter };
`;

const _ResultScore= styled.div<{status: 'HOST' | 'GUEST'}>`
  height: 100%;
  width : 100%;
  position: relative;
  display : flex;
  justify-content: center;
  align-items: center;
  color    : white;

  &::before,
  &::after {
    content : '';
    position: absolute;
    height  : 100%;
    width   : 100%;
  };

  &::before {
    background: black;
    clip-path: polygon(4% 13%, 98% 7%, 95% 94%, 8% 97%);
    z-index: 2;
  }

  &::after {
    background:
      ${(props) => props.status === 'HOST'
        ? '#2F1FF6'
        : `${ colors.redAccent }`
      };
    clip-path: polygon(0 6%, 100% 0, 98% 100%, 5% 100%);
    z-index: 1;
  }

  > span {
    margin-right: 30px;
    line-height: 1rem;
    font-size: 6rem;
    z-index  : 10;
  }

  > h1 {
    display: flex;
    justify-content: center;
    font-size: 10rem;
    z-index: 10;
  }

  > p {
    position : absolute;
    right    : 40px;
    bottom   : 20px;
    font-size: 4rem;
    z-index  : 10;
  }
`;

type ResultUserCardProps= {
  name  : string;
  score : number;
  status: 'HOST' | 'GUEST';
};

export const ResultUserCard= (
  { 
    name,  
    status
  }: ResultUserCardProps
) => {
  const roomInfoQuery= useFetchRoomInfoQuery({});
  const myUserStatus= roomInfoQuery.data?.loggedIn ? 'HOST': 'GUEST';
  const scoresQuery= useFetchScoresQuery({
    config: {
      refetchInterval: 3000
    }
  });
  return (
    <_ResultUserCard status={status} >
      <_UserNameWrapper status={status} >
        <_UserName status={status} >{ name }</_UserName>        
      </_UserNameWrapper>
      <_ResultScore status={status}>
        <span>Score</span>
        <h1>
          { 
            status === myUserStatus
              ? scoresQuery.data?.scores[0]
              : scoresQuery.data?.scores[1]
          }
        </h1>
        <p>pt</p>
      </_ResultScore>
    </_ResultUserCard>
  );
};