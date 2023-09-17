import styled from 'styled-components';
import { VulnerabilitySelectedFeild } from '.';

const _VulnerabilitiesLayout= styled.div`
  height         : 100%;
  width          : 100%;
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
  background: transparent;
`;

const _VulnerabilitiesBody= styled.div`
  height         : calc( 100% - 5rem);
  width          : 100%;
  position       : relative;
  background     : grey;
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
      </_VulnerabilitiesHead>
      <_VulnerabilitiesBody>{ children }</_VulnerabilitiesBody>
    </_VulnerabilitiesLayout>
  );
};