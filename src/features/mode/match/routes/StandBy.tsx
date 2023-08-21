import { Head } from "@/components/Head";
import { RoomSelectForm } from "@/features/rooms";
import styled from "styled-components";

const StandByLayout= styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 40vw 1fr 40vw;
  
`;

export const StandBy= () => {
  return (
    <>
      <Head title='待機画面' />
      <RoomSelectForm />
      <StandByLayout>
        
      </StandByLayout>    
    </>
  );
};