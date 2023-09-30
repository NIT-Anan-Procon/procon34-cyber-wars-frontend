import { colors } from '@/assets/styles';
import styled from 'styled-components';

const _CharacterStandbyCard= styled.div`
  height: 20rem;
  width : 50rem;
  position  : relative;
  background: ${ colors.bgLighter };
`;

const _StandbyStatus= styled.div`
  height: 6rem;
  width : 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  > span {
    font-size: 2.75rem;
    color: ${ colors.bgLighter };
  };
`;

const _StandbyUserName= styled.div`
  height: 10rem;
  width : 100%;

  > h1 {
    font-size: 6.5rem;
  }
`;

type CharacterStandbyCardProps= {
  userName: string;
  status  : 'HOST' | 'GUEST';
};

export const CharacterStandbyCard= (
  {
    userName,
    status
  }: CharacterStandbyCardProps
) => {
  return (
    <_CharacterStandbyCard>
      <_StandbyStatus >
        <span>{ status }</span>
      </_StandbyStatus>     
      <_StandbyUserName>
        <h1>{ userName }</h1>
      </_StandbyUserName>
    </_CharacterStandbyCard>
  );
};