import { useRecoilState } from 'recoil';

import { CHALLENGE_CHOICES_KEY, useFetchChallengeQuery } from '@/features/games/challenge';
import { Loading } from '@/components/Animation';
import { isCheckedChoicesState }  from '../states/atom';
import React, { useCallback, useEffect } from 'react';
import { CheckBox, Spinner } from '@/components/Elements';
import { useTransChoicesData } from '../hook/useTransChoicesData';

const transformData = (data) => {
  const uniqueData = Array.from(new Set(data));
  return uniqueData.map((value, index) => ({
    id: index,
    value: value,
    checked: false,
  }));
};


export const ChoiceList= () => {
  const [ isChoiceChecked, setIsChoiceChecked ]= useRecoilState( isCheckedChoicesState );
  const transChoicesData= useTransChoicesData();

  const { data: choices, isLoading }= useFetchChallengeQuery({
    config: {
      select: ( challenge ) => transChoicesData( challenge[ CHALLENGE_CHOICES_KEY ])
    }
  });

  if( isLoading ) {
    return <Spinner />
  };

  if( !choices ) { return null };

  const handleCheckboxChange = (id) => {
    const updatedChoices = isCheckedChoices.map((choice) => {
      if (choice.id === id) {
        return {
          ...choice,
          checked: !choice.checked,
        };
      }
      return choice;
    });
    console.log('w');
    setIsCheckedChoices(updatedChoices);
  };

  return (
    <div>
      { isCheckedChoices?.map((item, index) => (
        <div key={item.id}>
          <CheckBox
            index={index}
            value={item.value}
            label={ item.value }
            checked={item.checked}
            onChange={() => handleCheckboxChange(item.id)}
          />
          {item.value}
        </div>
      ))}
    </div>
  );
}