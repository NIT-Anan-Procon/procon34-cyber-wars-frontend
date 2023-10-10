export function shuffleArray( initialArray: Array<string> ) {
  const shuffledArray= initialArray.slice();

  let currentIndex   = shuffledArray.length;
  let randomIndex, temporaryValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex-= 1;

    temporaryValue= shuffledArray[currentIndex];
    shuffledArray[currentIndex]= shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
};