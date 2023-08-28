import styled from 'styled-components';

type ContainerProps= {
  children: React.ReactNode;
}

export const Container= ({ children }: ContainerProps ) => {
  return (
    <>{ children }</>
  )
}