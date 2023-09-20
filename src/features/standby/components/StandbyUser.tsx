import { ContentHeader } from '@/components/Elements';
import styled, { css } from 'styled-components';

const _UserInfoCard= styled.div<{ ishost: boolean }>`
  height : 60rem;
  width  : 50rem;
  padding: 0 1.5rem;
  position: relative;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #111111;
  ${(props) => props.ishost
    ? css`clip-path: polygon(10% 0, 80% 0, 100% 20%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%);`
    : css`clip-path: polygon(20% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 20%);`
  }
`;

const $UserCardHeader= styled(ContentHeader)`
  position: absolute;
`;

const _UserIconWrapper= styled.div`
  height: 60%;
  width : calc(100% - 5rem);
  margin-top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
`;

const _UserIcon= styled.img`
  width: 70%;
`;

const _UserNameBox= styled.div`
  height: 8rem;
  width : calc(100% - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.7;
  clip-path: polygon(0 0, 100% 0, 100% 48%, 90% 100%, 10% 100%, 0 48%);
  > span {
    font-size: 3rem;
    font-weight: bolder;
    color : white;
  }
`;

type StandbyUserProps= {
  userName: string;
  ishost  : boolean;
  iconPath: string;
};

export const StandbyUser= (
  { 
    userName, 
    ishost, 
    iconPath
  }: StandbyUserProps 
) => {
  return (
    <_UserInfoCard ishost={ ishost } >
      <$UserCardHeader title={ ishost? 'HOST': 'GUEST' } />
      <_UserIconWrapper>
        <_UserIcon src={ '' } alt={'icon'}/>
      </_UserIconWrapper>
      <_UserNameBox>
        <span>{ userName }</span>
      </_UserNameBox>
    </_UserInfoCard>
  );
};