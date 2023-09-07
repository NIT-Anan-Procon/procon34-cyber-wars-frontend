import { Button, Header } from "@/components/Elements";
import { useNavigate } from "react-router-dom";

export const Result= () => {
  const navigate= useNavigate();

  return (
    <>
      <Header title={'リザルト画面'} />
      Result
      <Button type='button' onClick={navigate('../explanation')}>next</Button>
    </>
  );
};