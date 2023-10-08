import { useRecoilState } from 'recoil';

import { CHALLENGE_CHOICES_KEY, useFetchChallengeQuery } from '@/features/challenge';
import { Loading } from '@/components/Animation';
import { isCheckedChoicesState }  from '../states/atom';
import { useCallback, useEffect } from 'react';
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
  const [isCheckedChoices, setIsCheckedChoices] = useRecoilState(isCheckedChoicesState);
  const [ isChoiceChecked, setIsChoiceChecked ]= useRecoilState( isCheckedChoicesState );
  const transChoicesData= useTransChoicesData();

  const { data: choices, isLoading }= useFetchChallengeQuery({
    config: {
      select: useCallback(( challnge ) => 
        transChoicesData( challnge[ CHALLENGE_CHOICES_KEY ] 
      ),[transChoicesData])
    }
  });  

  if( isLoading ) {
    return <Spinner />
  };

  if( !choices ) return null;

  const handleCheckboxChange = (id) => {console.log(isCheckedChoices)
    setIsCheckedChoices((prevChoices) =>
      prevChoices.map((choice) =>
        choice.id === id ? { ...choice, checked: !choice.checked } : choice
      )
    );
  };

  return (
    <div>
      {        
        choices?.map(( item, index ) => (
          <CheckBox 
            key     = { `vulItem_${index}` }
            index   = { index }
            value   = { item.value }
            label   = { item.value }
            checked = { isCheckedChoices.includes( item.value ) }
            onChange= { handleCheckboxChange }
          />
        ))
      }
    </div>
  );
};