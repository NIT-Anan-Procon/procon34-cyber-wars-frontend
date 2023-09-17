import { Button } from '@/components/Elements';
import styled from 'styled-components';
import { useHint } from '../api/useHint';
import { colors } from '@/assets/styles';

const _HintForm= styled.form`
  height : 100%;
  width  : 50%;
  padding: 15% 15px;
  background: ${ colors.bgDarker };
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;

  > p {
    font-size: 1.5rem;
    font-weight: 600;
    color : ${ colors.primary }
  }
`;

export const HintForm= () => {
  const { postVulnerabilityId }= useHint();

  return (
    <_HintForm onSubmit={ async() => await postVulnerabilityId(0) } >
      <p>ポイントを消費してヒントを閲覧しますか？</p>
      <Button type={'submit'}>ポイントを消費する</Button>
    </_HintForm>
  );
};