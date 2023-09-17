import { selector } from 'recoil';

export const getCheckedValues= selector({
  key: 'selector_GetCheckedValues',
  get: ({ get }) => {
    const checkBoxList= get();
    const filterCheckedValues= checkBoxList.filter((label) => label.checked);
    
    return filterCheckedValues;
  },
});