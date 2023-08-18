import { Head } from "@/components/Head";
import styled from "styled-components";

const SettingLayout= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Settings= () => {
  return (
    <>
      <Head title='ユーザ設定' />
      <SettingLayout>
        Settings
        
      </SettingLayout>    
    </>
  );
};