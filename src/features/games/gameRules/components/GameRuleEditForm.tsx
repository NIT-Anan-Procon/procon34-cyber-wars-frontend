import { useRecoilState } from 'recoil';
import { settingTimeState } from '../states/atom/settingTimeState';
import { useEffect, useState } from 'react';
import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { fetchRoomInfoFn } from '@/features/games/room';
import styled from 'styled-components';
import { colors } from '@/assets/styles';
import { settingRuleSchema } from '../types';
import { Loading } from '@/components/Animation';
import { useQuery } from '@tanstack/react-query';
import { fetchRoomInfoQueryKey } from '../../room/api/fetchRoomInfo/fetchRoomInfoQueryKey';

const _GameRuleEditFormWrapper= styled.div`
  height  : 100%;
  width   : 100%;
  display : flex;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  > h1 {
    font-size: 3rem;
    color    : ${ colors.bgLighter };
  } 
`;

const $EditButton= styled( Button )`
  position: absolute;
  right   : 0;
  height  : 3rem;
  width   : 8rem;
  font-size: 1.6rem;
  clip-path: polygon(2% 6%, 96% 1%, 93% 100%, 5% 96%);
`;

const _UnitLabel= styled.label`
  margin-left: 8px;
  font-size: 1.4rem;
  font-weight: bolder;
  color    : ${ colors.bgLighter };
`;

const SettingRuleFormStyle=`
  margin  : 0;
  padding : 0;
  row-gap : 0;
  flex-direction: row;
  display: flex;
  align-items: center;
  height : 100%;
  width  : 100%;
  background: transparent;
`;

const SettingRuleInputStyle=`
  height: 100%;
  width : calc( 100% - 11rem);
`;

type GameRuleEditFormProps= {
  phase: string;
  limitTime: number;
};

type SettingTimeFormType= {
  settingTime: number;
};

export const GameRuleEditForm= ({ phase, limitTime }: GameRuleEditFormProps ) => {
  const [ phaseSetting, setPhaseSetting ]= useRecoilState( settingTimeState );
  const [ isEdit, setIsEdit ]= useState( false );

  const { data, isLoading }= useQuery( fetchRoomInfoQueryKey, fetchRoomInfoFn );

  useEffect(() => {
    setPhaseSetting(( prev ) => {
      return { ...prev,  [ phase ]: limitTime * 60 } 
    });
  }, [ limitTime ]);

  if( isLoading ) {
    return <Loading />
  };

  if( !data ) return null;

  const handleEdit= () => {
    setIsEdit( !isEdit );
  };

  const handleSetting= (settingTime: number) => {
    setPhaseSetting(( prev ) => {
      return { ...prev,  [ phase ]: settingTime * 60 } 
    });
    setIsEdit( !isEdit );
  };

  return (
    <>
      { isEdit 
        ? <_GameRuleEditFormWrapper>
            <Form<SettingTimeFormType, typeof settingRuleSchema>
                onSubmit={
                  ({ settingTime } : SettingTimeFormType ) => {
                    handleSetting(settingTime)
                  }
                }
                schema={settingRuleSchema}
                styles={SettingRuleFormStyle}
              >
                {({ register, formState: { errors }}) => (
                  <>
                    <InputField
                      id='settingTime'
                      type='text'
                      error= {errors.settingTime}
                      defaultValue={ phaseSetting[phase] / 60 }
                      placeholder='制限時間を入力してください'
                      registration= {register('settingTime',{ valueAsNumber: true }) }
                      styles={ SettingRuleInputStyle } 
                    />
                    <_UnitLabel>分</_UnitLabel>    
                    <$EditButton type='submit' >Save</$EditButton>
                  </>
                )}
              </Form>
          </_GameRuleEditFormWrapper>
        : <_GameRuleEditFormWrapper>

            { data.host
              ? <>
                  <h1>{ phaseSetting[phase] / 60 }</h1>
                  <_UnitLabel>分</_UnitLabel>
                  <$EditButton type='button' onClick={ handleEdit } >Edit</$EditButton>
                </>            
              : <>
                  <h1>{ limitTime / 60 }</h1>
                  <_UnitLabel>分</_UnitLabel>
                </>
            }
          </_GameRuleEditFormWrapper>
      }
    </>
  );
};