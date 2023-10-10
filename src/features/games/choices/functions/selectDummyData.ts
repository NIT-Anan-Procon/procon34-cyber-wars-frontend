import { dummyDataList } from '../constant/dummyDataList';
import { shuffleArray } from './shuffleArray';

export function selectDummyData( dataNum: number ) {
  const randomDummyDataList= shuffleArray( dummyDataList );

  const sliceDummyDataList= randomDummyDataList.slice(0, dataNum);

  return sliceDummyDataList;
};