export const transVulArrayToObject= ( vulnerabilityList: Array<string> ): object => {
  const vulObject= vulnerabilityList.map(( value, index ) => {
    return {
      id: index,
      value: value,
      selected: false
    }
  });

  return vulObject;
};