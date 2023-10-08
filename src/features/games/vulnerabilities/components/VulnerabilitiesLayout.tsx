import styled from 'styled-components';
import { VulnerabilitySelectedFeild, VulnerabilitySubmitButton } from '.';

const _VulnerabilitiesLayout= styled.div`
  padding-top: 10px;
  height         : calc(100% - 8rem);
  width          : 50vw;
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  row-gap        : 3rem;
  background     : transparent;
`;

const _VulnerabilitiesHead= styled.div`
  height: 5rem;
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  background: transparent;
`;

const _VulnerabilitiesBody= styled.div`
  height         : calc( 100% - 5rem);
  width          : 100%;
  padding        : 20px;
  position       : relative;
  background     : black;
  border-radius  : 5px;
  overflow-y     : auto;
`;

type VulnerabilitiesLayoutProps= {
  children: React.ReactNode;
};

export const VulnerabilitiesLayout= ({ children }: VulnerabilitiesLayoutProps) => {
  return (
    <_VulnerabilitiesLayout>
      <_VulnerabilitiesHead>
        <VulnerabilitySelectedFeild />
        <VulnerabilitySubmitButton />
      </_VulnerabilitiesHead>
      <_VulnerabilitiesBody>{ children }</_VulnerabilitiesBody>
    </_VulnerabilitiesLayout>
  );
};