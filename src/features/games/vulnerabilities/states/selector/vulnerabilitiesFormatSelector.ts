import { selector } from 'recoil';

import { checkedVulnerabilies } from '../atom';

export const vulnerabiliesFormatSelector= selector({
  key: 'selector_vulnerabiliesFormatSelector',
  get: ({ get }) => {
    const vulnerabilies= get( checkedVulnerabilies );
    const formatToString= vulnerabilies.join(" ");

    return formatToString;
  }
});