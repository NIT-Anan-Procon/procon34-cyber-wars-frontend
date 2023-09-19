import { useChallengeDataTranslator } from "@/features/challenge";

export const HintList= () => {
  const { hintObject, isLoading }= useChallengeDataTranslator();

  if( isLoading ) {
    return <></>
  }

  return (
    <ul>
      { hintObject?.map(( props, index) => (
          <li key={index}>
            <div>{`hint-${props.index}`}</div>
            <span>{props.hintScore}</span>
          </li>
        )) 
      }
    </ul>
  );
};