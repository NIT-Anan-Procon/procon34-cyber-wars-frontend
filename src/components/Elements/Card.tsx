import styled from 'styled-components';

type CardHeaderProps= {
  title: string;
};

type CardContentProps= {
  children: React.ReactNode;
};

type CardProps= { 
  children: React.ReactNode;
};

const _CardHeader= styled.div`
  display    : block;
  font-size  : 10em;
  font-weight: bolder;

`;

const _CardContentWrapper= styled.div`
  height : 100%;
  width  : 100%;
  padding: 1.5rem;
`; 


export const CardHeader= ({ title }: CardHeaderProps) => {
  return (
    <_CardHeader>{ title }</_CardHeader>
  );
};

export const CardContent= ({ children }: CardContentProps) => {
  return (
    <_CardContentWrapper>{ children }</_CardContentWrapper>
  );
};

// export const CardActions= ({ children }) => {
//   return (
//     <></>
//   )
// }

const _Card= styled.div`
  border-radius: 2rem;
  background: grey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Card= ({ children }: CardProps) => {
  return (
    <_Card>{children}</_Card>
  );
};