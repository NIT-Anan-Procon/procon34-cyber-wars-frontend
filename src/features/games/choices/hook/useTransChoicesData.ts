import { selectDummyData } from '../functions/selectDummyData';
import { shuffleArray } from '../functions/shuffleArray';
import { choicesType } from '../types/choicesType';

export const useTransChoicesData= () => {
  const DUMMY_DATA_NUM= 10;
  const randomSelectDummyList= selectDummyData( DUMMY_DATA_NUM );

  function transChoicesData( defaultChoices: Array<string> ): choicesType {
    const addedDummyData= [...defaultChoices, ...randomSelectDummyList ];

    const shuffledChoiceList= shuffleArray( addedDummyData );

    const transChoiceList= shuffledChoiceList.map(( value, index ) => {
      return {
        id     : index,
        value  : value,
        checked: false
      };
    });
    
    return transChoiceList
  };

  return transChoicesData;
};