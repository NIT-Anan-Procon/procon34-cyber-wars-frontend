import { selector } from 'recoil';

import { checkedChoiceListState } from '../atom';

export const checkedChoiceValuesSelector= selector({
  key: 'selector_checkedChoiceValues',
  get: ({ get }) => {
    const checkedChoices= get( checkedChoiceListState );

    const formatToString= checkedChoices.join(" ");

    return formatToString;
  }
});