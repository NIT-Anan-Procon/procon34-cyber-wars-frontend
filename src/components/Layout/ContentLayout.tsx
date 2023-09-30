import styled from 'styled-components';

import { Head } from '../Head';
import { Header } from '../Elements';

const _ContentLayout= styled.div`
  height : 20vh;
  width  : 100vw;
`;

type ContentLayoutProps= {
  headTitle: string;
  header   : string;
  children : React.ReactNode;
};

export const ContentLayout= (
  { 
    headTitle,
    header,
    children
  }: ContentLayoutProps
) => {
  return (
    <>
      <Head title={ headTitle } />
      <_ContentLayout>
        <Header title={ header }/>
        { children }
      </_ContentLayout>
    </>
  );
};