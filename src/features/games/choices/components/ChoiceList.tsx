import { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { checkedChoiceListState, isCheckedChoicesState }  from '../states/atom';
import { CheckBox } from '@/components/Elements';
import { choicesType } from '../types/choicesType';

const _ChoiceList= styled.ul`
  height: 100%;
  width : 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(12rem, 1fr)
  );
  grid-template-rows: repeat(
    auto-fill,
    minmax(8rem, 1fr)
  );
`;

export const ChoiceList= ( item : choicesType ) => {
  const [ isChoiceChecked, setIsChoiceChecked ]= useRecoilState( isCheckedChoicesState );
  const [ checkedList, setCheckedList ]= useRecoilState( checkedChoiceListState );

  useEffect(() => {
    setIsChoiceChecked(item);
  },[])

  const handleCheckboxChange = ( id: number ) => {
    const updatedChoices = isChoiceChecked.map((choice) => {
      if (choice.id === id) {
        return {
          ...choice,
          checked: !choice.checked,
        };
      }
      return choice;
    });
    setIsChoiceChecked(updatedChoices);

    const checkedItem = updatedChoices.find((item) => item.id === id);

    if (checkedItem?.checked) {
      setCheckedList([...checkedList, checkedItem?.value]);
    } else {
      setCheckedList(checkedList.filter((value) => value !== checkedItem?.value));
    }
  };
  
  return (
    <_ChoiceList>
      { isChoiceChecked?.map((item, index: number) => (
          <CheckBox
            key={index}
            id={`checkbox_+${index}`}
            value={item.value}
            label={ item.value }
            checked={item.checked }
            onChange={ ()=> handleCheckboxChange(item.id) }
          />
      ))}
    </_ChoiceList>
  );
}